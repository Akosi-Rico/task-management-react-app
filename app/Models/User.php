<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Services\JsonOutput;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use App\Helpers\Manage\TaskHelper;
class User extends Authenticatable
{
    use HasFactory, Notifiable, TaskHelper;
    
    protected $guard_name = "web";

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public static function registerUser($request)
    {
        try {
            DB::beginTransaction();
                if (empty($request)) {
                    return false;
                }

                $user = self::create([
                    "name" => $request['name'],
                    "email" => $request['email'],
                    "password" => Hash::make($request['password']),
                ]);

                if (!empty($user)) {
                    auth()->attempt(["email" => $request['email'], "password" => $request['password']]);
                }
                
            DB::commit();
            return self::loadResponse("Successfully", Response::HTTP_OK, new JsonOutput);
        } catch (\Throwable $th) {
            return self::loadResponse($th->getMessage(), Response::HTTP_BAD_REQUEST, new JsonOutput);
        }
    }

    public static function login($request) 
    {
        try {
            if (empty($request)) {
                return false;
            }

            auth()->attempt(["email" => $request["email"], "password" => $request["password"]]);
            if (empty(auth()->check())) {
                throw new \Exception("Email & Password given is not registered");
            }

           return self::loadResponse("Successfully Login!", Response::HTTP_OK, new JsonOutput);
        } catch(\Throwable $th) {
            return self::loadResponse($th->getMessage(), Response::HTTP_BAD_REQUEST, new JsonOutput);
        }
    }
}
