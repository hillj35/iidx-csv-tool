<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ScoreSource;
use Faker\Generator as Faker;

$factory->define(ScoreSource::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence,
        'player_id' => 1
    ];
});
