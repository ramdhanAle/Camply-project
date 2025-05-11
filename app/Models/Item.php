<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    // Kolom yang bisa diisi (mass assignable)
    protected $fillable = [
        'name',
        'description',
        'image_url',
        'category',
        'price_per_day',
        'stock',
    ];

    /**
     * Relasi many-to-many ke rentals melalui tabel pivot rentals_has_items.
     * Tabel pivot ini juga menyimpan kolom tambahan yaitu quantity.
     */
    public function rentals()
    {
        return $this->belongsToMany(Rental::class, 'rentals_has_items', 'items_id', 'rentals_id')
                    ->withPivot('quantity');
    }
}
