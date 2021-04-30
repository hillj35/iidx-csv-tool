<?php

namespace Database\Factories;

use App\Models\ScoreSource;
use Illuminate\Database\Eloquent\Factories\Factory;

class ScoreSourceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ScoreSource::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence(),
            'player_id' => 1,
            'private' => $this->faker->boolean()
        ];
    }
}
