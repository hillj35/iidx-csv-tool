<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BPIRecord extends Model
{
    //
    protected $fillable = array('style', 'title', 'artist', 'genre', 
    'nlvl', 'nnotes', 'nrecord', 'nkavg',
    'hlvl', 'hnotes', 'hrecord', 'hkavg',
    'alvl', 'anotes', 'arecord', 'akavg');
}
