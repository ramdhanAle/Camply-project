<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gear extends Model
{
    /** @use HasFactory<\Database\Factories\GearFactory> */
    use HasFactory;

    protected $table = 'gears';
    protected $guarded = ['id'];
}
