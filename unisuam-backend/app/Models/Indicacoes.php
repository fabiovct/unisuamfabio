<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{


    protected $table = 'indicacoes';
    protected $primaryKey  = 'id';

    //public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nome',
        'cpf',
        'telefone',
        'email',
        'status_id'
    ];

    protected $casts = [];



    public function status()
    {
        return $this->hasOne(StatusIndicacoes::class, 'indicacoes_status', 'id', 'status_id');
    }





}