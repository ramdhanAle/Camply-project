<?php

namespace App\Http\Controllers;

use App\Models\GearGuide;
use Illuminate\Http\Request;

class GearGuideController extends Controller
{
    public function index()
    {
        return response()->json(GearGuide::with('recommendedGears')->get(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'camping_type' => 'required|string|max:50',
            'tips' => 'nullable|string',
        ]);

        $guide = GearGuide::create($validated);
        return response()->json($guide, 201);
    }

    public function show($id)
    {
        $guide = GearGuide::with('recommendedGears')->find($id);
        if (!$guide) {
            return response()->json(['message' => 'Gear guide not found'], 404);
        }
        return response()->json($guide, 200);
    }

    public function update(Request $request, $id)
    {
        $guide = GearGuide::find($id);
        if (!$guide) {
            return response()->json(['message' => 'Gear guide not found'], 404);
        }

        $validated = $request->validate([
            'camping_type' => 'sometimes|required|string|max:50',
            'tips' => 'nullable|string',
        ]);

        $guide->update($validated);
        return response()->json($guide, 200);
    }

    public function destroy($id)
    {
        $guide = GearGuide::find($id);
        if (!$guide) {
            return response()->json(['message' => 'Gear guide not found'], 404);
        }

        $guide->recommendedGears()->delete();
        $guide->delete();

        return response()->json(['message' => 'Gear guide deleted successfully'], 200);
    }
}
