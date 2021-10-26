<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get('localizacao', function(){
    $dsn = 'mysql:host=localhost;dbname=db_posicao';
    $usuario = 'root';
    $senha = '';

    $conexao = new PDO($dsn, $usuario, $senha);

  $query = 'select * from posição';

  $stms = $conexao->query($query);
  $lista = $stms->fetchAll(PDO::FETCH_ASSOC);
  $json = json_encode($lista);
  
  
  return $json;
});

Route::post('localizacao', function(Request $request){
    

    return $request->input('ID');
});