<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ScoreSnakeCase extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('scores', function(Blueprint $table) {
            $table->renameColumn('sourceid', 'source_id');
            $table->renameColumn('playcount', 'play_count');
            $table->renameColumn('lastplayed', 'last_played');
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
        Schema::table('scores', function(Blueprint $table) {
            $table->renameColumn('source_id', 'sourceid');
            $table->renameColumn('play_count', 'playcount');
            $table->renameColumn('last_played', 'lastplayed');
        });
    }
}
