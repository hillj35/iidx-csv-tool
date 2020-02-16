<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ScoresNullableColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('scores', function (Blueprint $table) {
            $table->integer('ex_score')->nullable()->change();
            $table->integer('perfect')->nullable()->change();
            $table->integer('great')->nullable()->change();
            $table->integer('miss')->nullable()->change();
            $table->string('clear')->nullable()->change();
            $table->string('dj_level')->nullable()->change();
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
            $table->integer('ex_score')->nullable(false)->change();
            $table->integer('perfect')->nullable(false)->change();
            $table->integer('great')->nullable(false)->change();
            $table->integer('miss')->nullable(false)->change();
            $table->string('clear')->nullable(false)->change();
            $table->string('dj_level')->nullable(false)->change();
        });
    }
}
