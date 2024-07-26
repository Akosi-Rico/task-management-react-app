<?php

use App\Http\Controllers\Access\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Management\TaskController;

Route::resource("/task", TaskController::class);
Route::get("/load/datatable", [TaskController::class, "loadTable"])->name("load.datatable");

Route::get("/login", [LoginController::class, 'login'])->name("login");
Route::get("/login/register", [LoginController::class, 'register'])->name("login.register");
Route::post("/login/register/user", [LoginController::class, 'registerProcess'])->name("login.register.user");