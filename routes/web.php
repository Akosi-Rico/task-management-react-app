<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Management\TaskController;


Route::resource("/task", TaskController::class);
Route::get("/load/datatable", [TaskController::class, "loadTable"])->name("load.datatable");