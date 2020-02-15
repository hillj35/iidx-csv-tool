<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ScoresTableRework extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //this migration refactors the score table to separate different difficulties
        //of the same songs, instead of having them all in one line
        //this will be easier to handle in the future
        Schema::table('scores', function (Blueprint $table) {
            //drop columns
            $table->dropColumn('hex');
            $table->dropColumn('hpg');
            $table->dropColumn('hg');
            $table->dropColumn('hmiss');
            $table->dropColumn('hclear');
            $table->dropColumn('hdjlvl');
            $table->dropColumn('aex');
            $table->dropColumn('apg');
            $table->dropColumn('ag');
            $table->dropColumn('amiss');
            $table->dropColumn('aclear');
            $table->dropColumn('adjlvl');

            //rename columns
            $table->renameColumn('nex', 'ex_score');
            $table->renameColumn('npg', 'perfect');
            $table->renameColumn('ng', 'great');
            $table->renameColumn('nmiss', 'miss');
            $table->renameColumn('nclear', 'clear');
            $table->renameColumn('ndjlvl', 'dj_level');

            //add columns
            $table->string('chart_type');   //normal, hyper, another...
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('scores', function (Blueprint $table) {
            //
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

            $table->renameColumn('ex_score', 'nex')->nullable(false)->change();
            $table->renameColumn('perfect', 'npg')->nullable(false)->change();
            $table->renameColumn('great', 'ng')->nullable(false)->change();
            $table->renameColumn('miss', 'nmiss')->nullable(false)->change();
            $table->renameColumn('clear', 'nclear')->nullable(false)->change();
            $table->renameColumn('dj_level', 'ndjlvl')->nullable(false)->change();

            $table->dropColumn('chart_type');
        });
    }
}
