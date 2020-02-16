<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewScoreTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scores', function (Blueprint $table) {
            $table->biginteger('source_id');
            $table->string('name');
            $table->string('chart_version');
            $table->integer('play_count');
            $table->integer('ex_score');
            $table->integer('perfect');
            $table->integer('great');
            $table->integer('miss');
            $table->string('clear');
            $table->string('dj_level');
            $table->integer('update_id');
            $table->timestamps();

            $table->primary(['source_id', 'name', 'chart_version',
                'ex_score', 'clear']);
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
