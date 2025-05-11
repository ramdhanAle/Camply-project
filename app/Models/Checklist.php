<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checklist extends Model
{
    use HasFactory;

    protected $table = 'checklist'; // nama tabel sesuai database

    protected $fillable = [
        'title',       // perbaikan dari 'tittle'
        'items',       // JSON berisi array string
        'users_id',
        'created_at'   // bisa tetap ada kalau Anda pakai manual
    ];

    public $timestamps = false;

    protected $casts = [
        'items' => 'array', // Laravel otomatis decode dari JSON ke array
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'users_id');
    }
}
