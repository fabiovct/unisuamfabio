<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\IndicacoesRepository;
use Illuminate\Database\QueryException;

class IndicacoesController extends Controller
{

    public function cadastrarIndicacao(Request $request){
        try {
            return IndicacoesRepository::createIndicacao($request);
        } catch (QueryException $e) {
            return response()->json([
                "error" => $e
            ]);
        }  
    }

    public function selecionarIndicacao(Request $request){
        try {
            return IndicacoesRepository::getIndicacaoById($request->id);
        } catch (QueryException $e) {
            return response()->json([
                "error" => $e
            ]);
        }  
    }

    public function excluirIndicacao(Request $request){
        try {
            return IndicacoesRepository::deleteIndicacao($request->id);
        } catch (QueryException $e) {
            return response()->json([
                "error" => $e
            ]);
        }  
    }

    public function listarIndicacoes(){
        try {
            return IndicacoesRepository::getIndicacoes();
        } catch (QueryException $e) {
            return response()->json([
                "error" => $e
            ]);
        }  
    }

    public function editarIndicacoes(Request $request){
        try {
            return IndicacoesRepository::updateIndicacao($request);
        } catch (QueryException $e) {
            return response()->json([
                "error" => $e
            ]);
        }  
    }


}