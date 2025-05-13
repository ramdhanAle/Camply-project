<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checklist extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',        // sesuai migrasi (meskipun typo)
        'type',          // tipe perlengkapan
        'users_id',      // foreign key ke users
        'created_at',    // isi manual jika perlu
        'updated_at'
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
