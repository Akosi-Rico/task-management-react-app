<?php

namespace App\Models\Manage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Symfony\Component\HttpFoundation\Response;

class Task extends Model
{
    use HasFactory;

    public static function loadDataTableData()
    {
        try {

            $data = self::select("id", "title", "content", "status_id")->get();
            return response([
                "resultset" => $data,
            ], Response::HTTP_OK);
        } catch(\Throwable $th) {
            return response([
                "message" => $th->getMessage(),
            ], Response::HTTP_BAD_REQUEST);
        }
    }

    public static function createOrUpdateTask($request)
    {
        try {
            DB::beginTransaction();
                if (empty($request)) {
                    return false;
                }

                $task = self::where("id", $request['id'])->first();
                if (empty($task)) {
                    $task = new self();
                }

                $task->title = $request['title'];
                $task->content = $request['task'];
                $task->status_id = $request['status'];
                $task->user_id = 0;
                $task->save();

            DB::commit();
            return response([
                "message" => "Successfully",
            ], Response::HTTP_OK); 
        } catch (\Throwable $th) {
            info($th);
            //return self::loadResponse($th->getMessage(), Response::HTTP_BAD_REQUEST, new JsonOutput);
        }
    }

    public static function removeTask($id)
    {
        try {
            DB::beginTransaction();
                if (empty($id)) {
                    return false;
                }

                $task = self::where("id", $id)->first();
                if (!empty($task)) {
                    $task->delete();
                }

            DB::commit();
            return response([
                "message" => "Successfully",
            ], Response::HTTP_OK); 
        } catch (\Throwable $th) {
            info($th);
            //return self::loadResponse($th->getMessage(), Response::HTTP_BAD_REQUEST, new JsonOutput);
        }
    }
}
