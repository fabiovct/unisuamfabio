<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{


    protected $table = 'status_indicacoes';
    protected $primaryKey  = 'id';

    //public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'descricao'
    ];

    protected $casts = [];





}