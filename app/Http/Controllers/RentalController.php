<?php

namespace App\Http\Controllers;

use App\Models\Rental;
use Illuminate\Http\Request;

class RentalController extends Controller
{
    public function index()
    {
        // hanya tampilkan milik user login
        return response()->json(
            Rental::with('items')->where('users_id', auth()->id())->get(),
            200
        );
    }

    public function show($id)
    {
        $rental = Rental::with('items')->findOrFail($id);

        if ($rental->users_id !== auth()->id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return response()->json($rental, 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'rental_date' => 'required|date',
            'return_date' => 'required|date|after_or_equal:rental_date',
            'total_price' => 'required|numeric',
            'status' => 'required|in:pending,approved,cancelled,returned',
            'items' => 'required|array',
            'items.*.id' => 'required|exists:items,id',
            'items.*.quantity' => 'required|integer|min:1'
        ]);

        $rental = Rental::create([
            'rental_date' => $validated['rental_date'],
            'return_date' => $validated['return_date'],
            'total_price' => $validated['total_price'],
            'status' => $validated['status'],
            'users_id' => auth()->id(), // otomatis dari token login
            'created_at' => now(),
        ]);

        $this->syncItems($rental, $validated['items']);

        return response()->json($rental->load('items'), 201);
    }

    public function update(Request $request, $id)
    {
        $rental = Rental::findOrFail($id);

        if ($rental->users_id !== auth()->id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validated = $request->validate([
            'rental_date' => 'required|date',
            'return_date' => 'required|date|after_or_equal:rental_date',
            'total_price' => 'required|numeric',
            'status' => 'required|in:pending,approved,cancelled,returned',
            'items' => 'required|array',
            'items.*.id' => 'required|exists:items,id',
            'items.*.quantity' => 'required|integer|min:1'
        ]);

        $rental->update([
            'rental_date' => $validated['rental_date'],
            'return_date' => $validated['return_date'],
            'total_price' => $validated['total_price'],
            'status' => $validated['status'],
            // users_id tidak perlu di-update
        ]);

        $this->syncItems($rental, $validated['items']);

        return response()->json($rental->load('items'), 200);
    }

    public function destroy($id)
    {
        $rental = Rental::findOrFail($id);

        if ($rental->users_id !== auth()->id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $rental->items()->detach();
        $rental->delete();

        return response()->json(['message' => 'Rental deleted'], 200);
    }

    private function syncItems(Rental $rental, array $items)
    {
        $syncData = [];
        foreach ($items as $item) {
            $syncData[$item['id']] = ['quantity' => $item['quantity']];
        }
        $rental->items()->sync($syncData);
    }
}
