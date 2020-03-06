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
            $table->biginteger('source_id');
            $table->string('name');
            $table->char('chart_version');
            $table->smallInteger('play_count');
            $table->smallInteger('ex_score');
            $table->smallInteger('perfect');
            $table->smallInteger('great');
            $table->smallInteger('miss')->nullable();
            $table->string('clear', 16);
            $table->tinyInteger('clear_rank');
            $table->string('dj_level', 3);
            $table->tinyInteger('dj_level_rank');
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
