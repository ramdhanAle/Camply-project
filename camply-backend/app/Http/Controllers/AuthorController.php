<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Author;

class AuthorController extends Controller
{
    public function index() {
        $authors = Author::all();
        $data = [
            "success" => true,
            "message" => $authors->isEmpty() ? "Resource data not found" : "Get all resources",
            "data" => $authors,
        ];
        
        return response()->json($data, 200);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            "name" => "required|max:255"
        ]);

        if($validator->fails()) {
            $data = [
                'success' => false,
                'message' => $validator->errors()
            ];
            return response()->json($data, 422);
        }

        $author = Author::create([
            'name' => $request->name,
        ]);

        $data = [
            'success' => true,
            'message' => 'Resources added successfully',
            'data' => $author
        ];

        return response()->json($data, 201);
    }

    public function show(string $id) {
        $author = Author::find($id);
        
        if (!$author) {
            $data = [
                "success" => false,
                "message" => "Resource not found"
            ];

            return response()->json($data, 404);
        }
        
        $data = [
            'success' => true,
            'message' => 'Get detail resource',
            'data' => $author,
        ];
        
        return response()->json($data, 200);
    }
    
    public function update(string $id, Request $request) {
        $author = Author::find($id);

        if (!$author) {
            $data = [
                "success" => false,
                "message" => "Resource not found",
            ];
            
            return response()->json($data, 404);
        }
        
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
        ]);
        
        if ($validator->fails()) {
            $data = [
                "success" => false,
                "message" => $validator->errors(),
            ];

            return response()->json($data, 422);
        }

        $data = [
            'name' => $request->name,
        ];
        
        $author->update($data);

        $data = [
            "success" => true,
            "message" => "Resource updated successfully!",
            "data" => $author,
        ];

        return response()->json($data, 200);
    }
    
    public function destroy(string $id) {
        $author = Author::find($id);

        if (!$author) {
            $data = [
                "success" => false,
                "message" => "Resource not found"
            ];

            return response()->json($data, 404);
        }
        
        $author->delete();
        $data = [
            'success' => true,
            'message' => 'Resource deleted successfully'
        ];

        return response()->json($data, 200);
    }
}