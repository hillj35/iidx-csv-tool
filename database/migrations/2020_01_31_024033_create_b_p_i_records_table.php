<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBPIRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('b_p_i_records', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('style');
            $table->string('title');
            $table->string('artist');
            $table->string('genre');
            $table->integer('nlvl');
            $table->integer('nnotes');
            $table->integer('nrecord');
            $table->integer('nkavg');
            $table->integer('hlvl');
            $table->integer('hnotes');
            $table->integer('hrecord');
            $table->integer('hkavg');
            $table->integer('alvl');
            $table->integer('anotes');
            $table->integer('arecord');
            $table->integer('akavg');
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
        Schema::dropIfExists('b_p_i_records');
    }
}
