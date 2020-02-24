<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\SongData;

class FillSongDataTableRootage extends Migration
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
            //if no normal then it's leggendaria
            if ($data[4] == '0') {
                SongData::create(array(
                    'style' => $data[0],
                    'title' => $data[1],
                    'artist' => $data[2],
                    'genre' => $data[3],
                    'level' => $data[12],
                    'chart_version' => 'l',
                    'notes' => $data[13],
                    'record' => $data[14],
                    'kavg' => $data[15],
                    'data_style' => 'ROOTAGE'
                ));
    
            }

            else {
                SongData::create(array(
                    'style' => $data[0],
                    'title' => $data[1],
                    'artist' => $data[2],
                    'genre' => $data[3],
                    'level' => $data[4],
                    'chart_version' => 'n',
                    'notes' => $data[5],
                    'record' => $data[6],
                    'kavg' => $data[7],
                    'data_style' => 'ROOTAGE'
                ));

                SongData::create(array(
                    'style' => $data[0],
                    'title' => $data[1],
                    'artist' => $data[2],
                    'genre' => $data[3],
                    'level' => $data[8],
                    'chart_version' => 'h',
                    'notes' => $data[9],
                    'record' => $data[10],
                    'kavg' => $data[11],
                    'data_style' => 'ROOTAGE'
                ));

                //check if the another chart exists
                if ($data[12] != '0') {
                    SongData::create(array(
                        'style' => $data[0],
                        'title' => $data[1],
                        'artist' => $data[2],
                        'genre' => $data[3],
                        'level' => $data[12],
                        'chart_version' => 'a',
                        'notes' => $data[13],
                        'record' => $data[14],
                        'kavg' => $data[15],
                        'data_style' => 'ROOTAGE'
                    ));
                }
            }
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
        SongData::truncate();
    }
}
