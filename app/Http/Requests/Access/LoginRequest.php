<?php

namespace App\Http\Requests\Access;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            "payload.email" => "required",
            "payload.password" => ["required"],
        ];
    }

    public function messages()
    {
        return [
            'payload.email.required' => "Email is required, Please fill out the required field!",
            'payload.password.required' => "Password is required, Please fill out the required field!",
        ];
    }
}
