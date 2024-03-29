<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//Scores
Route::get('scores/userscores/{id}', 'ScoreController@userScores');
Route::resource('scores', 'ScoreController')->middleware(['auth:api']);

//User Page
Route::resource('users', 'UserPageController')->middleware(['auth:api']);
