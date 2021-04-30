<?php

namespace Tests\Feature;

use App\Models\ScoreSource;
use App\Models\User;
use Laravel\Passport\Passport;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ScoreSourceTest extends TestCase
{
    use DatabaseMigrations;
    use WithFaker;

    protected $user;

    protected function setUp() : void
    {
        parent::setup();
        $this->user = User::factory()->create();
        $this->withoutExceptionHandling();
    }

    protected function confirmJsonResponse($response, $json, $status)
    {
        $response->assertStatus($status)
            ->assertJson($json);
    }

    public function testCreate()
    {
        $data = [
            'name' => $this->faker->sentence,
            'player_id' => $this->user->id,
            'private' => $this->faker->boolean()
        ];

        Passport::actingAs($this->user);

        $response = $this->post(route('scoresources.store'), $data);

        //confirm object was created successfully
        $this->confirmJsonResponse($response, $data, 201);
    }

    public function testListAll()
    {
        $scoreSource = ScoreSource::factory()->create([
            'player_id' => $this->user->id
        ]);
        $scoreSource1 = ScoreSource::factory()->create([
            'player_id' => $this->user->id
        ]);

        $data = [
            [
                'player_id' => $this->user->id,
                'name' => $scoreSource->name,
                'private' => $scoreSource->private
            ],
            [
                'player_id' => $this->user->id,
                'name' => $scoreSource1->name,
                'private' => $scoreSource1->private
            ]
        ];

        Passport::actingAs($this->user);

        $response = $this->get(route('scoresources.index'));

        $this->confirmJsonResponse($response, $data, 200);
    }

    public function testGet()
    {
        $scoreSource = ScoreSource::factory()->create([
            'player_id' => $this->user->id
        ]);

        $data = [
            'player_id' => $this->user->id,
            'name' => $scoreSource->name,
            'private' => $scoreSource->private
        ];

        Passport::actingAs($this->user);

        $response = $this->get(route('scoresources.show', $scoreSource->id));

        $this->confirmJsonResponse($response, $data, 200);
    }

    public function testUpdate()
    {
        $scoreSource = ScoreSource::factory()->create([
            'player_id' => $this->user->id
        ]);

        $data = [
            'name' => $this->faker->sentence,
            'player_id' => $this->user->id,
            'private' => $scoreSource->private
        ];

        Passport::actingAs($this->user);

        $response = $this->put(route('scoresources.update', $scoreSource->id), $data);

        $response->assertStatus(200);

        //now test that what we get is correct
        $response = $this->get(route('scoresources.show', $scoreSource->id));

        //confirm we get a response and that it is the object we created
        $this->confirmJsonResponse($response, $data, 200);

    }

    public function testDelete()
    {
        $scoreSource = ScoreSource::factory()->create([
            'player_id' => $this->user->id
        ]);

        Passport::actingAs($this->user);

        $response = $this->delete(route('scoresources.destroy', $scoreSource->id));
        $response->assertStatus(204);
        $this->assertDatabaseMissing('score_sources', ['id' => $scoreSource->id]);
    }

    public function testUnauthorizedDelete()
    {
        $scoreSource = ScoreSource::factory()->create([
            'player_id' => 123456789
        ]);

        Passport::actingAs($this->user);

        $response = $this->delete(route('scoresources.destroy', $scoreSource->id));
        $response->assertStatus(403);
        $this->assertDatabaseHas('score_sources', ['id' => $scoreSource->id]);
    }

    public function testUnauthorizedUpdate()
    {
        $data = [
            'name' => $this->faker->sentence
        ];

        $scoreSource = ScoreSource::factory()->create([
            'player_id' => 123456789
        ]);

        Passport::actingAs($this->user);

        $response = $this->put(route('scoresources.update', $scoreSource->id), $data);
        $response->assertStatus(403);
    }
}
