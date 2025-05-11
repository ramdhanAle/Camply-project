<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RentalItem extends Model
{
    protected $table = 'rentals_has_items';
    public $timestamps = false;

    protected $fillable = [
        'rentals_id',
        'items_id',
        'quantity',
    ];

    public function rental()
    {
        return $this->belongsTo(Rental::class, 'rentals_id');
    }

    public function item()
    {
        return $this->belongsTo(Item::class, 'items_id');
    }
}
