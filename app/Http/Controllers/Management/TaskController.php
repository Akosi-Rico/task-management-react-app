<?php

namespace App\Http\Controllers\Management;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manage\TaskRequest;
use App\Models\Manage\Task;
class TaskController extends Controller
{
    public function index()
    {
       //auth()->guard()->logout();
        $data = [
            "name" => auth()->user()->name,
            "currentDate" => now()->format('F j, Y'),
        ];
        return view("modules.task", compact('data'));
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

    public function loadUserInfo()
    {
        return [
            "name" => auth()->user()->name,
            "currentDate" => now()->format('F j, Y'),
        ];
    }
}
