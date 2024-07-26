<?php

namespace App\Http\Controllers\Access;

use App\Http\Controllers\Controller;
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

}
