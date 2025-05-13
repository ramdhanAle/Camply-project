<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecommendedGear extends Model
{
    use HasFactory;

    protected $table = 'recommended_gears';

    protected $fillable = [
        'gear_name',
        'notes',
        'gear_guides_id'
    ];

    /**
     * Relasi ke tabel gear_guides
     * RecommendedGear BELONGS TO GearGuide
     */
    public function gearGuide()
    {
        return $this->belongsTo(GearGuide::class, 'gear_guides_id');
    }
}
