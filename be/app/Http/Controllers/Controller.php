<?php

namespace App\Http\Controllers;

use OpenApi\Annotations as OA;

/**
 * @OA\Info(
 *     title="Library API",
 *     version="1.0.0",
 *     description="API documentation for Library system"
 * )
 * 
 * @OA\Server(
 *     url="http://localhost:8000",
 *     description="Local API server"
 * )
 */
abstract class Controller
{
    //
}
