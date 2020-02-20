<?php

namespace App\Http\Controllers;

use App\ScoreSource;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class ScoreSourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ScoreSource::where('player_id', Auth::id())
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255'
        ]);

        $scoreSource = ScoreSource::create([
            'player_id' => Auth::id(),
            'name' => $request->input('name'),
            'private' => $request->input('private')
        ]);

        return response()->json(ScoreSource::find($scoreSource->id), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  integer $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $scoreSource = ScoreSource::findOrFail($id);

        return response()->json($scoreSource);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  integer  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $scoreSource = ScoreSource::findOrFail($id);

        //check if user is authorized to delete
        if ($scoreSource->player_id != Auth::id())
            return response()->json(null, 403);


        $updatedFields = $request->only(['name', 'private']);

        $scoreSource->update($updatedFields);
        $scoreSource->increment('update_id');
        return response()->json($scoreSource);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  integer  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        //
        $scoreSource = ScoreSource::findOrFail($id);

        //check if user is authorized to delete
        if ($scoreSource->player_id != Auth::id())
            return response()->json(null, 403);

        $scoreSource->delete();
        return response()->json(null, 204);
    }
}
