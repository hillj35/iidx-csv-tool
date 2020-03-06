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
        $scores = DB::select("select song_data.title
            ,legg_name
            ,style
            ,top_plays.chart_version
            ,ex_score
            ,clear_rank
            ,dj_level_rank
            ,miss
            ,play_counts.play_count
            ,genre
            ,level
            ,notes
            ,record
            ,kavg
        from 
        (
            select scores.name
                ,scores.chart_version
                ,max(ex_score) as ex_score
                ,max(clear_rank) as clear_rank
                ,max(dj_level_rank) as dj_level_rank
                ,min(miss) as miss
            from scores join score_sources
                on scores.source_id = score_sources.id
            where player_id = ?
            group by scores.name
                ,chart_version
        ) as top_plays
        join song_data
        on (top_plays.name = song_data.title or top_plays.name = song_data.legg_name)
        and top_plays.chart_version = song_data.chart_version
        left outer join 
        (
            select title, sum(play_count) as play_count from
            (
                select source_id
                    ,scores.name
                    ,max(play_count) as play_count
                from scores join score_sources
                    on scores.source_id = score_sources.id
                where player_id = ?
                group by source_id, name
            ) as source_play_count
            join 
            (
                select distinct title, legg_name
                from song_data
            ) s_data
            on source_play_count.name = s_data.title or source_play_count.name = s_data.legg_name
            group by title
        ) play_counts 
        on (song_data.title = play_counts.title or song_data.legg_name = play_counts.title)
        ", [$id, $id]);
        
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
