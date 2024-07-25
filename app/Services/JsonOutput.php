<?php

namespace App\Services;
use App\Contracts\Manage\TaskInterface;

class JsonOutput implements TaskInterface
{
    public function output($message, $code)
    {
        return response()->json([
            "message" => $message
        ], $code);
    }
}
