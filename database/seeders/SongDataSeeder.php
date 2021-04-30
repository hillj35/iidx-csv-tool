<?php

namespace Database\Seeders;

use App\Models\SongData;
use Illuminate\Database\Seeder;

class SongDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SongData::truncate();

        //open bpi data csv
        $file = fopen("resources/csv/song_data_combined.csv", "r");
        $data = fgetcsv($file, null, ",");

        while (($data = fgetcsv($file, null, ",")) !== FALSE) {
            //normal
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
                'legg_name' => $data[20],
                'data_style' => 'ROOTAGE'
            ));

            //hyper
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
                'legg_name' => $data[20],
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
                    'legg_name' => $data[20],
                    'data_style' => 'ROOTAGE'
                ));
            }

            //check if legg exists
            if ($data[1] != $data[20]) {
                SongData::create(array(
                    'style' => $data[0],
                    'title' => $data[1],
                    'artist' => $data[2],
                    'genre' => $data[3],
                    'level' => $data[16],
                    'chart_version' => 'l',
                    'notes' => $data[17],
                    'record' => $data[18],
                    'kavg' => $data[19],
                    'legg_name' => $data[20],
                    'data_style' => 'ROOTAGE'
                ));
            }
        }
    }
}
