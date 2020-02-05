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
Route::group(['prefix' => 'scoresources'], function() {
    Route::get('/get', 'ScoreSourceController@get')->middleware('auth');
    Route::post('/delete', 'ScoreSourceController@delete')->middleware('auth');
    Route::post('/create', 'ScoreSourceController@create')->middleware('auth');
    Route::post('/update', 'ScoreSourceController@update')->middleware('auth');
});
