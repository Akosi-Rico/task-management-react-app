<?php

namespace App\Http\Controllers\Access;

use App\Http\Controllers\Controller;
use App\Http\Requests\Access\LoginRequest;
use App\Http\Requests\Access\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login() 
    {
        return view("modules.index");
    }

    public function register() 
    {
        return view("modules.index");
    }

    public function registerProcess(RegisterRequest $request)
    {   
        return User::registerUser(request()["payload"]);
    }

    public function loginProcess(LoginRequest $request)
    {
        return User::login(request()["payload"]);
    }

    public function logout() 
    {
        auth()->guard()->logout();

        request()->session()->invalidate();

        request()->session()->regenerateToken();
    }
}
