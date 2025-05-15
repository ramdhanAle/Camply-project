<?php

namespace App\Http\Controllers;

use App\Models\Checklist;
use Illuminate\Http\Request;

class ChecklistController extends Controller
{
    // GET /api/checklists
    public function index()
    {
        // Hanya tampilkan checklist milik user login
        return response()->json(
            Checklist::where('users_id', auth()->id())->get(),
            200
        );
    }

    // POST /api/checklists
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:100',
            'type' => 'required|string|max:45'
        ]);

        $validated['users_id'] = auth()->id(); // ambil ID user dari token

        $checklist = Checklist::create($validated);

        return response()->json($checklist, 201);
    }

    // GET /api/checklists/{id}
    public function show($id)
    {
        $checklist = Checklist::find($id);

        if (!$checklist) {
            return response()->json(['message' => 'Checklist not found'], 404);
        }

        if ($checklist->users_id !== auth()->id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return response()->json($checklist);
    }

    // PUT /api/checklists/{id}
    public function update(Request $request, $id)
    {
        $checklist = Checklist::find($id);

        if (!$checklist) {
            return response()->json(['message' => 'Checklist not found'], 404);
        }

        if ($checklist->users_id !== auth()->id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:100',
            'type' => 'sometimes|required|string|max:45'
        ]);

        $checklist->update($validated);

        return response()->json($checklist);
    }

    // DELETE /api/checklists/{id}
    public function destroy($id)
    {
        $checklist = Checklist::find($id);

        if (!$checklist) {
            return response()->json(['message' => 'Checklist not found'], 404);
        }

        if ($checklist->users_id !== auth()->id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $checklist->delete();

        return response()->json(['message' => 'Checklist deleted successfully'], 204);
    }
}
