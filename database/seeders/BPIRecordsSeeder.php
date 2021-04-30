<?php

namespace Database\Seeders;

use App\Models\BPIRecord;
use Illuminate\Database\Seeder;

class BPIRecordsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        BPIRecord::truncate();

        //open bpi data csv
        $file = fopen("resources/csv/song_data.csv", "r");
        $data = fgetcsv($file, null, ",");

        while (($data = fgetcsv($file, null, ",")) !== FALSE) {
            BPIRecord::create(array(
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
}
