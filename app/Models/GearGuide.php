<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GearGuide extends Model
{
    use HasFactory;

    // Nama tabel jika berbeda dari default (opsional, Laravel akan otomatis pakai "gear_guides")
    protected $table = 'gear_guides';

    // Kolom yang bisa diisi massal
    protected $fillable = [
        'camping_type',
        'tips',
    ];

    /**
     * Relasi: GearGuide memiliki banyak RecommendedGear
     */
    public function recommendedGears()
    {
        return $this->hasMany(RecommendedGear::class, 'gear_guides_id');
    }
}
