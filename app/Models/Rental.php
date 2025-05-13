<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rental extends Model
{
    use HasFactory;

    // Non‐aktifkan auto‐timestamps (created_at + updated_at)
    public $timestamps = false;

    protected $fillable = [
        'rental_date',
        'return_date',
        'total_price',
        'status',
        'created_at',
        'users_id',
    ];

    /**
     * Setiap Rental dimiliki oleh satu User
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'users_id');
    }

    /**
     * Setiap Rental punya banyak Item via pivot rentals_has_items
     */
    public function items()
    {
        return $this->belongsToMany(
            Item::class,
            'rentals_has_items',
            'rentals_id',
            'items_id'
        )->withPivot('quantity');
    }
}
