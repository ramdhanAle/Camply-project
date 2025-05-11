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

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

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
