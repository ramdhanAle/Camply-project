<?php

namespace App\Http\Controllers;

use App\Models\Rental;
use Illuminate\Http\Request;

class RentalController extends Controller
{
    // GET /api/rentals
    public function index()
    {
        return response()->json(Rental::with('items')->get(), 200);
    }

    // GET /api/rentals/{id}
    public function show($id)
    {
        $rental = Rental::with('items')->findOrFail($id);
        return response()->json($rental, 200);
    }

    // POST /api/rentals
    public function store(Request $request)
    {
        $validated = $request->validate([
            'rental_date' => 'required|date',
            'return_date' => 'required|date|after_or_equal:rental_date',
            'total_price' => 'required|numeric',
            'status' => 'required|in:pending,approved,cancelled,returned',
            'users_id' => 'required|exists:users,id',
            'items' => 'required|array',
            'items.*.id' => 'required|exists:items,id',
            'items.*.quantity' => 'required|integer|min:1'
        ]);

        $rental = Rental::create([
            'rental_date' => $validated['rental_date'],
            'return_date' => $validated['return_date'],
            'total_price' => $validated['total_price'],
            'status' => $validated['status'],
            'users_id' => $validated['users_id'],
            'created_at' => now(),
        ]);

        $this->syncItems($rental, $validated['items']);

        return response()->json($rental->load('items'), 201);
    }

    // PUT /api/rentals/{id}
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'rental_date' => 'required|date',
            'return_date' => 'required|date|after_or_equal:rental_date',
            'total_price' => 'required|numeric',
            'status' => 'required|in:pending,approved,cancelled,returned',
            'users_id' => 'required|exists:users,id',
            'items' => 'required|array',
            'items.*.id' => 'required|exists:items,id',
            'items.*.quantity' => 'required|integer|min:1'
        ]);

        $rental = Rental::findOrFail($id);
        $rental->update([
            'rental_date' => $validated['rental_date'],
            'return_date' => $validated['return_date'],
            'total_price' => $validated['total_price'],
            'status' => $validated['status'],
            'users_id' => $validated['users_id'],
        ]);

        $this->syncItems($rental, $validated['items']);

        return response()->json($rental->load('items'), 200);
    }

    // DELETE /api/rentals/{id}
    public function destroy($id)
    {
        $rental = Rental::findOrFail($id);
        $rental->items()->detach(); // hapus relasi pivot dulu
        $rental->delete();

        return response()->json(['message' => 'Rental deleted'], 200);
    }

    // Helper: sinkronisasi item dan quantity
    private function syncItems(Rental $rental, array $items)
    {
        $syncData = [];
        foreach ($items as $item) {
            $syncData[$item['id']] = ['quantity' => $item['quantity']];
        }
        $rental->items()->sync($syncData);
    }
}
