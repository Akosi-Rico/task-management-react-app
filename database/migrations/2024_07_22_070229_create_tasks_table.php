<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string("title", 199)->index();
            $table->text("content");
            $table->boolean("status_id")->default(0)->comment("0 - Inactive, 1 - Published, 2 - Archived")->index();
            $table->integer("user_id")->index();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
