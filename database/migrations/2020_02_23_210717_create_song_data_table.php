<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSongDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('song_data', function (Blueprint $table) {
            $table->string('style', 40);
            $table->string('title');
            $table->string('artist');
            $table->string('genre');
            $table->tinyInteger('level');
            $table->char('chart_version');
            $table->smallInteger('notes');
            $table->smallInteger('record');
            $table->smallInteger('kavg');
            $table->string('legg_name');
            $table->string('data_style', 40);
            $table->timestamps();

            $table->primary(['title', 'chart_version',
            'data_style']);
            $table->index('legg_name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('song_data');
    }
}
