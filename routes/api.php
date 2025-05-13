<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    AuthController,
    UserController,
    ChecklistController,
    GearGuideController,
    ItemController,
    RentalController,
    RentalItemController
};

// PUBLIC ROUTES
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/ping', fn () => response()->json(['message' => 'API is working']));

Route::apiResource('gear-guides', GearGuideController::class)->only(['index', 'show']);
// Route::apiResource('recommended-gears', RecommendedGearController::class)->only(['index', 'show']);

// PROTECTED ROUTES (LOGIN REQUIRED)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);

    // ❗ User management hanya bisa diakses admin
    Route::middleware('admin.only')->group(function () {
        Route::apiResource('users', UserController::class);
    });

    // Other resource routes
    Route::apiResource('checklists', ChecklistController::class);
    Route::apiResource('rentals', RentalController::class);
    // Route::apiResource('rental-items', RentalItemController::class);
    Route::apiResource('items', ItemController::class);
});
