<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Management\TaskController;


Route::resource("/task", TaskController::class);