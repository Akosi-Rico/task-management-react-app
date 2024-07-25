<?php

namespace App\Http\Requests\Manage;

use Illuminate\Foundation\Http\FormRequest;

class TaskRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
   
    public function rules(): array
    {
        $id = (isset(request()["payload"]["id"]) ? request()["payload"]["id"] : null);
        return [
            "payload.title" => ["required", "max:100","unique:tasks,title,$id"],
            "payload.task" => "required",
            "payload.status" => "required"
        ];
    }

    public function messages()
    {
        return [
            "payload.title.required" => "Title is required, Please fill out the required field!",
            "payload.title.max" => "Title may not be greater than 100 characters..",
            "payload.title.unique" => "This title has already been taken",
            "payload.task.required" => "Content is required, Please fill out the required field!",
            "payload.status.required" => "Status is required, Please fill out the required field!",
        ];
    }
}
