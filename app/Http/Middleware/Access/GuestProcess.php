<?php

namespace App\Http\Middleware\Access;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class GuestProcess
{
    public function handle(Request $request, Closure $next, $guard = null): Response
    {
        if (Auth::guard($guard)->check()) {
            return redirect('/task');
        }
   
        return $next($request);
    }
}
