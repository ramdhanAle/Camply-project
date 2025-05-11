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

    // POST /api/rentals
    public function store(Request $request)
    {
        $validated = $request->validate([
            'rental_date' => 'required|date',
            'return_date' => 'required|date|after_or_equal:rental_date',
            'total_price' => 'required|numeric',
            'status' => 'required|in:pending,active,completed,cancelled',
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
            'created_at' => now()
        ]);

        // Attach items to pivot table
        foreach ($validated['items'] as $item) {
            $rental->items()->attach($item['id'], ['quantity' => $item['quantity']]);
        }

        return response()->json($rental->load('items'), 201);
    }

    // GET /api/rentals/{id}
    public function show($id)
    {
        $rental = Rental::with('items')->find($id);
        if (!$rental) {
            return response()->json(['message' => 'Rental not found'], 404);
        }
        return response()->json($rental, 200);
    }

    // PUT /api/rentals/{id}
    public function update(Request $request, $id)
    {
        $rental = Rental::find($id);
        if (!$rental) {
            return response()->json(['message' => 'Rental not found'], 404);
        }

        $validated = $request->validate([
            'rental_date' => 'sometimes|date',
            'return_date' => 'sometimes|date|after_or_equal:rental_date',
            'total_price' => 'sometimes|numeric',
            'status' => 'sometimes|in:pending,active,completed,cancelled',
            'users_id' => 'sometimes|exists:users,id',
        ]);

        $rental->update($validated);
        return response()->json($rental->load('items'), 200);
    }

    // DELETE /api/rentals/{id}
    public function destroy($id)
    {
        $rental = Rental::find($id);
        if (!$rental) {
            return response()->json(['message' => 'Rental not found'], 404);
        }

        $rental->items()->detach(); // clear pivot table
        $rental->delete();

        return response()->json(['message' => 'Rental deleted successfully'], 200);
    }
}
