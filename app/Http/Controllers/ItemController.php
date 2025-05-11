<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    // GET /api/items
    public function index()
    {
        return response()->json(Item::all(), 200);
    }

    // POST /api/items
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'nullable|string',
            'image_url' => 'nullable|string',
            'category' => 'required|string|max:45',
            'price_per_day' => 'required|numeric',
            'stock' => 'required|integer'
        ]);

        $item = Item::create($validated);
        return response()->json($item, 201);
    }

    // GET /api/items/{id}
    public function show($id)
    {
        $item = Item::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }
        return response()->json($item, 200);
    }

    // PUT /api/items/{id}
    public function update(Request $request, $id)
    {
        $item = Item::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:100',
            'description' => 'nullable|string',
            'image_url' => 'nullable|string',
            'category' => 'sometimes|required|string|max:45',
            'price_per_day' => 'sometimes|required|numeric',
            'stock' => 'sometimes|required|integer'
        ]);

        $item->update($validated);
        return response()->json($item, 200);
    }

    // DELETE /api/items/{id}
    public function destroy($id)
    {
        $item = Item::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        $item->delete();
        return response()->json(['message' => 'Item deleted successfully'], 200);
    }
}
