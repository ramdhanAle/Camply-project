<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rentals', function (Blueprint $table) {
            $table->id();
            $table->date('rental_date');
            $table->date('return_date');
            $table->decimal('total_price', 10, 2);
            $table->enum('status', ['pending', 'approved', 'cancelled', 'returned']);
            $table->dateTime('created_at');
            $table->unsignedBigInteger('users_id');

            // Foreign key ke tabel users
            $table->foreign('users_id')->references('id')->on('users')->onDelete('cascade');

            // Jika ingin gunakan timestamps standar Laravel
            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rentals');
    }
};
