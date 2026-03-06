<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ItemController;
use App\Http\Controllers\Api\UserController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    

    Route::get('/user/permissions', [UserController::class, 'permissions']);
    Route::post('/users/{user}/assign-role', [UserController::class, 'assignRole']);
    

    Route::apiResource('items', ItemController::class);
    Route::apiResource('users', UserController::class);
});