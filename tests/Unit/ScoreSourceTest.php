<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\User;
use App\ScoreSource;

class ScoreSourceTest extends TestCase
{
    protected $user;
    protected $response;

    use \Illuminate\Foundation\Testing\DatabaseMigrations;

    public function testCreate()
    {
        $user = factory(User::class)->create();
        $response = $this->actingAs($user)
            ->json('POST', '/api/scoresources/create', ['name' => 'testScoreSource']);
        
        //confirm object was created successfully
        $response->assertStatus(201)
            ->assertJson([
                'name' => 'testScoreSource',
                'playerId' => $user['id'],
            ]);
    }

    public function testGet()
    {
        $user = factory(User::class)->create();
        $scoreSource = factory(ScoreSource::class)->create([
            'playerid' => $user['id']
        ]);

        $response = $this->actingAs($user)
            ->get('/api/scoresources/get');

        //confirm we get a response and that it is the object we created
        $response->assertStatus(200)
            ->assertJson([[
                'playerid' => $user['id'],
                'name' => $scoreSource['name'],
            ]]);
    }

    public function testUpdate() 
    {
        $user = factory(User::class)->create();
        $scoreSource = factory(ScoreSource::class)->create([
            'playerid' => $user['id']
        ]);

        $response = $this->actingAs($user)
            ->json('POST', '/api/scoresources/update', 
            ['id' => $user['id'], 'update' => ['name' => 'testUpdate']]);
        
        $response->assertStatus(200);

        //now test that what we get is correct
        $response = $this->actingAs($user)
        ->get('/api/scoresources/get');

        //confirm we get a response and that it is the object we created
        $response->assertStatus(200)
            ->assertJson([[
                'playerid' => $user['id'],
                'name' => 'testUpdate',
            ]]);

    }

    public function testDelete() 
    {
        $user = factory(User::class)->create();
        $scoreSource = factory(ScoreSource::class)->create([
            'playerid' => $user['id']
        ]);
        
        $response = $this->actingAs($user)
            ->json('POST', '/api/scoresources/delete', ['id' => $scoreSource['id']]);
        $response->assertStatus(200);
        $this->assertDatabaseMissing('score_sources', ['id' => $scoreSource['id']]);
    }
}
