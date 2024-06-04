<?php

use Illuminate\Support\Facades\Route;
// routes/web.php
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserInfoController;
use App\Http\Controllers\UserPostController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\CommentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::resource('users', UserController::class);
Route::resource('user_infos', UserInfoController::class);
Route::resource('user_posts', UserPostController::class);
Route::resource('likes', LikeController::class);
Route::resource('comments', CommentController::class);
