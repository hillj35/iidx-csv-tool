<?php

namespace App\Http\Controllers;

use App\Score;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use DB;

class ScoreController extends Controller
{
    /**
     * Return a listing of a User's scores
     */

    public function userScores($id) 
    {
                //top plays subquery
                $topPlays = DB::table('scores')
                ->select(
                    'scores.name'
                    ,'chart_version'
                    ,DB::raw('max(ex_score) as ex_score')
                    ,DB::raw('max(clear_rank) as clear_rank')
                )->join('score_sources', 'scores.source_id', '=', 'score_sources.id')
                ->where('player_id', '=', $id)
                ->groupby('scores.name', 'chart_version');
        
                $scores = Score::select(
                    DB::raw('scores.name as title') 
                    ,'scores.chart_version'
                    ,'play_count'
                    ,'top_plays.ex_score'
                    ,'perfect'
                    ,'great'
                    ,'miss'
                    ,'top_plays.clear_rank'
                    ,'dj_level'
                    ,'song_data.level'
                    ,'song_data.style'
                    ,'song_data.genre'
                    ,'song_data.notes'
                    ,'song_data.record'
                    ,'song_data.kavg'
                )->joinSub($topPlays, 'top_plays', function ($join) {
                    $join->on('scores.name', '=', 'top_plays.name');
                    $join->on('scores.chart_version', '=', 'top_plays.chart_version');
                    $join->on('scores.ex_score', '=', 'top_plays.ex_score');
                })
                ->leftJoin('song_data', function($join) {
                    $join->on('song_data.title', '=', 'scores.name');
                    $join->on('song_data.chart_version', '=', 'scores.chart_version');
                })->get();

                return response()->json($scores, 200);
        
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'data' => 'required|array'
        ]);

        $data = array_map(function ($item) {
            return array_merge($item,['created_at'=>Carbon::now(), 'updated_at'=>Carbon::now()]);
        }, $request->input('data'));

        Score::insertOrIgnore($data);
        return response()->json(null, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Score  $score
     * @return \Illuminate\Http\Response
     */
    public function show(Score $score)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Score  $score
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Score $score)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Score  $score
     * @return \Illuminate\Http\Response
     */
    public function destroy(Score $score)
    {
        //
    }
}
