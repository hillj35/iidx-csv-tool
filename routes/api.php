<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Score source
Route::resource('scoresources', 'ScoreSourceController')->middleware(['auth:api'])->except(['create', 'edit']);
Route::resource('scores', 'ScoreController')->middleware(['auth:api']);

//User Page
Route::resource('users', 'UserPageController')->middleware(['auth:api']);