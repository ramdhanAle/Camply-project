<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\GearController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Auth Route
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Resource Route
Route::apiResource('/gears', GearController::class)->only('index', 'show');

// Route for authenticate users
Route::middleware(['auth:api'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/test', function() {
        return response()->json(["success" => true, 'message' => "Anjayy, Bangg"]);
    });
    // Route::apiResource('/transactions', TransactionController::class)->only(['store', 'show', 'update']);
    
    // Route for role admin
    Route::middleware(['role:admin'])->group(function() {
        // Route::apiResource('/transactions', TransactionController::class)->only(['index', 'destroy']);
    });
});