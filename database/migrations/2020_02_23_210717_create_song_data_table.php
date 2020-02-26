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
            $table->bigIncrements('id');
            $table->string('style');
            $table->string('title');
            $table->string('artist');
            $table->string('genre');
            $table->integer('level');
            $table->string('chart_version');
            $table->integer('notes');
            $table->integer('record');
            $table->integer('kavg');
            $table->string('legg_name');
            $table->string('data_style');
            $table->timestamps();
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
