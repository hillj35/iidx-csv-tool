<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ScoreSourceSnakeCase extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('score_sources', function(Blueprint $table) {
            $table->renameColumn('playerId', 'player_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('score_sources', function(Blueprint $table) {
            $table->renameColumn('player_id', 'playerId');
        });
    }
}
