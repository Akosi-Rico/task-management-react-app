<?php

namespace App\Http\Controllers\Access;

use App\Http\Controllers\Controller;
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
}
