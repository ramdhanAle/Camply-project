<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checklist extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',        
        'type',         
        'users_id',     
        'created_at',   
        'updated_at'
    ];

    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class, 'users_id');
    }
}
