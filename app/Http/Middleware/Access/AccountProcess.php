<?php

namespace App\Http\Middleware\Access;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AccountProcess
{
    
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->check()) {
            return $next($request);
        } 

        return redirect("login");
    }
}
