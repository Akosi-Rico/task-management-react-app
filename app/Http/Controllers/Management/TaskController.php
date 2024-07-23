<?php

namespace App\Http\Controllers\Management;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Manage\Task;
class TaskController extends Controller
{
    public function index()
    {
        return view("modules.main");
    }

    public function create()
    {
        //
    }

    public function store()
    {
       return Task::createOrUpdateTask(request()->payload);
    }

   
    public function show(string $id)
    {
        //
    }

    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }

    public function loadTable() 
    {
        return Task::loadDataTableData();
    }
}
