<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Models\Book;

class BookController extends Controller
{
    public function index() {
        $books = Book::with('genre', 'author')->get();
        $data = [
            "success" => true,
            "message" => $books->isEmpty() ? "Resource data not found" : "Get all resources",
            "data" => $books,
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request) {
        // Validator
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'cover_photo' => 'required|image|mimes:jpeg,jpg,png|max:2048',
            'genre_id' => 'required|exists:genres,id',
            'author_id' => 'required|exists:authors,id',
        ]);

        // Check validator error
        if ($validator->fails()) {
            $data = [
                'success' => false,
                'message' => $validator->errors(),
            ];

            return response()->json($data, 422);
        }

        // Upload image
        $image = $request->file('cover_photo');
        $image->store('books', 'public');

        // Insert data
        $book = Book::create([
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
            'stock' => $request->stock,
            'cover_photo' => $image->hashName(),
            'genre_id' => $request->genre_id,
            'author_id' => $request->author_id,
        ]);

        // Response
        $data = [
            'success' => true,
            'message' => 'Resources added successfully!',
            'data' => $book
        ];

        return response()->json($data, 201);
    }

    public function show(string $id) {
        $book = Book::with('genre', 'author')->find($id);
        
        if (!$book) {
            $data = [
                "success" => false,
                "message" => "Resource not found",
            ];

            return response()->json($data, 404);
        }
        
        $data = [
            'success' => true,
            'message' => 'Get detail resource',
            'data' => $book,
        ];
        
        return response()->json($data, 200);
    }

    public function update(string $id, Request $request) {
        // Mencari data
        $book = Book::find($id);

        if (!$book) {
            $data = [
                "success" => false,
                "message" => "Resource not found",
            ];
            
            return response()->json($data, 404);
        }
        
        // Validasi data
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'cover_photo' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
            'genre_id' => 'required|exists:genres,id',
            'author_id' => 'required|exists:authors,id',
        ]);
        
        if ($validator->fails()) {
            $data = [
                "success" => false,
                "message" => $validator->errors(),
            ];

            return response()->json($data, 422);
        }

        // Siapkan data yang ingin diupdate
        $data = [
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
            'stock' => $request->stock,
            'genre_id' => $request->genre_id,
            'author_id' => $request->author_id,
        ];
        
        // Handle image (upload & delete image)
        if ($request->hasFile('cover_photo')) {
            $image = $request->file('cover_photo');
            $image->store('books', 'public');
            
            if ($book->cover_photo) {
                Storage::disk('public')->delete('books/' . $book->cover_photo);
            }
            
            $data['cover_photo'] = $image->hashName();
        }
        
        // Update data baru ke database
        $book->update($data);

        $data = [
            "success" => true,
            "message" => "Resource updated successfully!",
            "data" => $book,
        ];

        return response()->json($data, 200);
    }
    
    public function destroy(string $id) {
        $book = Book::find($id);
        
        if (!$book) {
            $data = [
                "success" => false,
                "message" => "Resource not found"
            ];

            return response()->json($data, 404);
        }
        
        $book->delete();
        $data = [
            'success' => true,
            'message' => 'Resource deleted successfully'
        ];
        
        if ($book->cover_photo) {
            Storage::disk('public')->delete('books/' . $book->cover_photo);
        }

        return response()->json($data, 200);
    }
}