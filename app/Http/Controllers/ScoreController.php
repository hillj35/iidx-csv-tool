<?php

namespace App\Http\Controllers;

use App\Models\Score;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ScoreController extends Controller
{
    /**
     * Return a listing of a User's scores
     */

    public function userScores($id)
    {
        $scores = DB::select("select song_data.title
                ,song_data.chart_version
                ,top_plays.ex_score
                ,top_plays.miss
                ,top_plays.clear_rank
                ,top_plays.dj_level_rank
                ,play_counts.play_count
                ,song_data.level
                ,song_data.style
                ,song_data.genre
                ,song_data.notes
                ,song_data.record
                ,song_data.kavg
            from song_data left outer join
            (
                select song_data.title
                    ,scores.chart_version
                    ,max(ex_score) as ex_score
                    ,max(clear_rank) as clear_rank
                    ,max(dj_level_rank) as dj_level_rank
                    ,min(miss) as miss
                from scores join score_sources
                    on scores.source_id = score_sources.id
                join song_data
                    on (scores.name = song_data.title or scores.name = song_data.legg_name)
                    and scores.chart_version = song_data.chart_version
                where player_id = ?
                group by song_data.title
                    ,chart_version
            ) as top_plays
                on song_data.title = top_plays.title
                and song_data.chart_version = top_plays.chart_version
            left join
            (
                select counts.title
                    ,sum(counts.play_count) as play_count
                from
                (
                    select song_data.title
                        ,scores.name
                        ,source_id
                        ,max(play_count) as play_count
                    from scores join score_sources
                        on scores.source_id = score_sources.id
                    join song_data
                        on (scores.name = song_data.title or scores.name = song_data.legg_name)
                    where player_id = ?
                    group by song_data.title
                        ,scores.name
                        ,source_id
                ) as counts
                group by counts.title
            ) as play_counts
                on song_data.title = play_counts.title
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
