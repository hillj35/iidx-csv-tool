<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ScoreSource;
use Illuminate\Support\Facades\Auth;

class ScoreSourceController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Score Source Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the creation of new score sources as well as
    | the ability to fetch a user's scores sources
    |
    */

    /**
     * creates a new ScoreSource instance
     *
     * @param  Request  $request
     *
     * @return \App\ScoreSource
     */
    protected function create(Request $request) 
    {
        $request->validate([
            'name' => 'required|max:255'
        ]);

        return ScoreSource::create([
            'playerId' => Auth::id(),
            'name' => $request['name']
        ]);
    }

    /**
     * delete
     *
     * @param  mixed $request
     *
     * @return void
     */
    protected function delete(Request $request) 
    {
        $request->validate([
            'id' => 'required|numeric'
        ]);

        return ScoreSource::destroy($request['id']);
    }

    /**
     * update
     *
     * @param  mixed $request
     *
     * @return void
     */
    protected function update(Request $request) 
    {
        $request->validate([
            'id' => 'required|numeric',
            'update' => 'required|array'
        ]);

        return ScoreSource::where('id', $request['id'])
            ->update($request['update']);     
    }

    /**
     * get
     *
     * @return void
     */
    protected function get() 
    {
        return ScoreSource::where('playerId', Auth::id())
            ->get();
    }
}
