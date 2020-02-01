<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\BPIRecord;

class FillBPIRecords extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //open bpi data csv
        $file = fopen("resources/csv/song_data.csv", "r");
        $data = fgetcsv($file, ",");
        $insert_array = array();

        while (($data = fgetcsv($file, ",")) !== FALSE) 
        {
            $record = BPIRecord::create(array(
                'style' => $data[0],
                'title' => $data[1],
                'artist' => $data[2],
                'genre' => $data[3],
                'nlvl' => $data[4],
                'nnotes' => $data[5],
                'nrecord' => $data[6],
                'nkavg' => $data[7],
                'hlvl' => $data[8],
                'hnotes' => $data[9],
                'hrecord' => $data[10],
                'hkavg' => $data[11],
                'alvl' => $data[12],
                'anotes' => $data[13],
                'arecord' => $data[14],
                'akavg' => $data[15]
            ));
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        BPIRecord::truncate();
    }
}
