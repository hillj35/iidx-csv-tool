<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    //
    protected $fillable = [
        "source_id", "name", "play_count", "nex", "npg", "ng", "nmiss",
        "nclear", "ndjlvl", "hex", "hpg", "hg", "hmiss", "hclear", "hdjlvl",
        "aex", "apg", "ag", "amiss", "aclear", "adjlvl", "last_played"
    ];
}
