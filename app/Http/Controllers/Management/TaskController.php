<?php

namespace App\Http\Controllers\Management;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manage\TaskRequest;
use App\Models\Manage\Task;
class TaskController extends Controller
{
    public function index()
    {
        return view("modules.index");
    }

    public function store(TaskRequest $request)
    {
        return Task::createOrUpdateTask(request()["payload"]);
    }

    public function destroy(string $id)
    {
       return Task::removeTask($id);
    }

    public function loadTable() 
    {
        return Task::loadDataTableData();
    }
}
