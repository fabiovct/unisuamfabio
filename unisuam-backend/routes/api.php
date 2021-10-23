<?php

use App\Http\Controllers\IndicacoesController;
use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::post('login', [LoginController::class, 'login']);

// Route::group(['prefix' => 'indicacoes', 'middleware' => 'jwt'], function () {
Route::group(['prefix' => 'indicacoes'], function () {
    Route::get('listar-indicacoes', [IndicacoesController::class, 'listarIndicacoes']);
    Route::post('criar-indicacao', [IndicacoesController::class, 'cadastrarIndicacao']);
    Route::put('editar-indicacao/{id}', [IndicacoesController::class, 'editarIndicacoes']);
    Route::delete('excluir-indicacao/{id}', [IndicacoesController::class, 'excluirIndicacao']);
});

Route::get('error', function () {
    return response()->json(['jwt_status' => false]);
});


