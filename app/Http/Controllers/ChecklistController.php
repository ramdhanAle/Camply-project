<?php

namespace App\Http\Controllers;

use App\Models\Checklist;
use Illuminate\Http\Request;

class ChecklistController extends Controller
{
    // GET /api/checklists
    public function index()
    {
        return response()->json(Checklist::all(), 200);
    }

    // POST /api/checklists
    public function store(Request $request)
    {
        $validated = $request->validate([
            'users_id' => 'required|exists:users,id',
            'title' => 'required|string|max:100',
            'items' => 'nullable|array',
            'items.*' => 'string|max:255'
        ]);

        // Simpan items dalam bentuk JSON jika berupa array
        $checklist = Checklist::create([
            'users_id' => $validated['users_id'],
            'title' => $validated['title'],
            'items' => json_encode($validated['items'] ?? [])
        ]);

        return response()->json($checklist, 201);
    }

    // GET /api/checklists/{id}
    public function show($id)
    {
        $checklist = Checklist::find($id);
        if (!$checklist) {
            return response()->json(['message' => 'Checklist not found'], 404);
        }
        return response()->json($checklist, 200);
    }

    // PUT /api/checklists/{id}
    public function update(Request $request, $id)
    {
        $checklist = Checklist::find($id);
        if (!$checklist) {
            return response()->json(['message' => 'Checklist not found'], 404);
        }

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:100',
            'items' => 'nullable|array',
            'items.*' => 'string|max:255'
        ]);

        $checklist->update([
            'title' => $validated['title'] ?? $checklist->title,
            'items' => array_key_exists('items', $validated)
                ? json_encode($validated['items'])
                : $checklist->items
        ]);

        return response()->json($checklist, 200);
    }

    // DELETE /api/checklists/{id}
    public function destroy($id)
    {
        $checklist = Checklist::find($id);
        if (!$checklist) {
            return response()->json(['message' => 'Checklist not found'], 404);
        }

        $checklist->delete();
        return response()->json(['message' => 'Checklist deleted successfully'], 200);
    }
}
