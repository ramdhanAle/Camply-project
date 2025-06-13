<?php

namespace App\Http\Controllers;

use App\Models\Gear;
use App\Http\Requests\StoreGearRequest;
use App\Http\Requests\UpdateGearRequest;

class GearController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $gears = Gear::all();
        $data = [
            'success' => true,
            "message" => $gears->isEmpty() ? "Resource data not found" : "Get all resources",
            "data" => $gears,
        ];

        return response()->json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGearRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(String $id)
    {
        $gearData = Gear::find($id);
        if (!$gearData) {
            return response()->json(['success' => false, 'message' => 'Resource not found'], 404);
        }

        $data = [
            'success' => true,
            'message' => 'Get resource',
            'data' => $gearData
        ];

        return response()->json($data, 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gear $gear)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGearRequest $request, Gear $gear)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gear $gear)
    {
        //
    }
}
