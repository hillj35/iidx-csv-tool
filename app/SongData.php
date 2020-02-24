<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SongData extends Model
{
    //
    protected $fillable = [
        'style', 'title', 'artist', 'genre', 'level'
        ,'chart_version', 'notes', 'record', 'kavg', 'data_style'
    ];
}
