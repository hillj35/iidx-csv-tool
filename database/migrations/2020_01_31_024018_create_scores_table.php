<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scores', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->biginteger('sourceid');
            $table->string('name');
            $table->integer('playcount');
            $table->integer('nex');
            $table->integer('npg');
            $table->integer('ng');
            $table->integer('nmiss');
            $table->string('nclear');
            $table->string('ndjlvl');
            $table->integer('hex');
            $table->integer('hpg');
            $table->integer('hg');
            $table->integer('hmiss');
            $table->string('hclear');
            $table->string('hdjlvl');
            $table->integer('aex');
            $table->integer('apg');
            $table->integer('ag');
            $table->integer('amiss');
            $table->string('aclear');
            $table->string('adjlvl');
            $table->timestamp('lastplayed');
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
        Schema::dropIfExists('scores');
    }
}
