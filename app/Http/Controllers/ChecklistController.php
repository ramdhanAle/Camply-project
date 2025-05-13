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
            'type' => 'required|string|max:45'
        ]);

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
        return response()->json($checklist);
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
            'type' => 'sometimes|required|string|max:45',
            'users_id' => 'sometimes|required|exists:users,id'
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

        $checklist->delete();
        return response()->json(['message' => 'Checklist deleted successfully'], 204);
    }
}
