<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ChecklistController;
use App\Http\Controllers\GearGuideController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\RentalController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RecommendedGearController;
use App\Http\Controllers\RentalItemController;
use App\Http\Controllers\AuthController;

//PUBLIC ACCESS
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/ping', function () {
    return response() ->json(['message' => 'API is working']);
});

//Optional public
Route::apiResource('gear-guides', GearGuideController::class)->only(['index', 'show']);
Route::apiResource('recommended-gears', RecommendedGearController::class)->only(['index', 'show']);

//PRTECTED ACCESS (LOGIN REQUIRED)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::apiResource('users', UserController::class);
    Route::apiResource('checklists', ChecklistController::class);
    Route::apiResource('rentals', RentalController::class);
    Route::apiResource('rental-items', RentalitemsController::class);
});


// Optional test route
Route::get('/ping', function () {
    return response()->json(['message' => 'API is working']);
});

// RESTful API endpoints
Route::apiResource('users', UserController::class);
Route::apiResource('checklists', ChecklistController::class);
Route::apiResource('gear-guides', GearGuideController::class);
Route::apiResource('items', ItemController::class);
Route::apiResource('rentals', RentalController::class);
Route::apiResource('recommended-gears', RecommendedGearController::class);
Route::apiResource('rental-items', RentalItemController::class);
