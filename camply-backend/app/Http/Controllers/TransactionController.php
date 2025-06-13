<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\Book;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index() {
        $transactions = Transaction::with('user', 'book')->get();
        $data = [
            "success" => true,
            "message" => $transactions->isEmpty() ? "Resource data not found" : "Get all resources",
            "data" => $transactions,
        ];
        return response()->json($data, 200);
    }

    public function store(Request $request) {
        // validator & cek validator
        $validator = Validator::make($request->all(), [
            'book_id' => 'required|exists:books,id',
            'quantity' => 'required|min:1',
        ]);

        if ($validator->fails()) {
            $data = [
                'success' => false,
                'message' => 'Validation error',
                'data' => $validator->errors()
            ];

            return response()->json($data, 422);
        }

        // generate ordernumber -> unique | ORD-..
        $uniqueCode = 'ORD-' . strtoupper(uniqid());

        // ambil user yang sedang login & cek login
        $user = auth('api')->user();
        
        if (!$user) {
            $data = [
                'success' => false,
                'message' => 'Unauthorized',
            ];
            
            return response()->json($data, 401);
        }

        // mencari data buku dari request
        $book = Book::find($request->book_id);
        
        if ($book->stock < $request->quantity) {
            $data = [
                'success' => false,
                'message' => 'Stock barang tidak cukup!',
            ];
            
            return response()->json($data, 400);
        }

        // hitung total harga
        $totalAmount = $book->price * $request->quantity;

        // kurangi stok buku
        $book->stock -= $request->quantity;
        $book->save();

        // simpan data transaksi
        $transaction = Transaction::create([
            "order_number" => $uniqueCode,
            "customer_id" => $user->id,
            "book_id" => $request->book_id,
            "quantity" => $request->quantity,
            "total_amount" => $totalAmount,
        ]);

        $data = [
            'success' => true,
            'message' => 'Transaction created successfully!',
            'data' => $transaction,
        ];

        return response()->json($data, 201);
    }

    public function show(string $id) {
        $transaction = Transaction::with('user', 'book')->find($id);
        if (!$transaction) {
            $data = [
                "success" => false,
                "message" => "Resource not found",
            ];

            return response()->json($data, 404);
        }

        $data = [
            "success" => true,
            "message" => "Get detail resource",
            "data" => $transaction,
        ];

        return response()->json($data, 200);
    }

    public function update(string $id, Request $request) {
        $transaction = Transaction::find($id);

        if (!$transaction) {
            $data = [
                'success' => false,
                'message' => 'Resource not found',
            ];

            return response()->json($data, 404);
        }

        $validator = Validator::make($request->all(), [
            'user_id' => 'exists:users,id',
            'book_id' => 'required|exists:books,id',
            'quantity' => 'required|min:1',
        ]);

        if ($validator->fails()) {
            $data = [
                'success' => false,
                'message' => $validator->errors(),
            ];

            return response()->json($data, 422);
        }
        
        // mencari data buku dari request
        $book = Book::find($request->book_id);

        // cek stok buku
        if ($book->stock < $request->quantity) {
            $data = [
                'success' => false,
                'message' => 'Stock barang tidak cukup!',
            ];
            
            return response()->json($data, 400);
        }

        // kurangi stok buku 
        $book->stock -= $request->quantity;
        $book->save();
        
        // reset stok buku lama
        $bookBefore = Book::find($transaction->book_id);
        $bookBefore->stock += $transaction->quantity;
        $bookBefore->save();

        $uniqueCode = 'ORD-' . strtoupper(uniqid());
        $totalAmount = $book->price * $request->quantity;
        
        $updated_transaction = [
            'order_number' => $uniqueCode,
            'customer_id' => $request->customer_id ?? $transaction->customer_id,
            'book_id' => $request->book_id,
            'quantity' => $request->quantity,
            'total_amount' => $totalAmount,
        ];

        $transaction->update($updated_transaction);

        $data = [
            'success' => true,
            'message' => 'Transaction updated successfully!',
            'data' => $transaction,
        ];

        return response()->json($data, 200);
    }

    public function destroy(string $id) {
        $transaction = Transaction::find($id);

        if (!$transaction) {
            $data = [
                'success' => false,
                'message' => 'Resource not found',
            ];

            return response()->json($data, 404);
        }

        // reset stok buku lama
        $bookBefore = Book::find($transaction->book_id);
        $bookBefore->stock += $transaction->quantity;
        $bookBefore->save();

        // hapus transaksi
        $transaction->delete();
        $data = [
            'success' => true,
            'message' => 'Resource deleted successfully!'
        ];

        return response()->json($data, 200);

    }
}