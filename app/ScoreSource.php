<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ScoreSource extends Model
{
    //
    protected $fillable = [
        "player_id", "name"
    ];
}
