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
        Schema::create('rentals_has_items', function (Blueprint $table) {
            $table->unsignedBigInteger('rentals_id');
            $table->unsignedBigInteger('items_id');
            $table->integer('quantity');

            // Primary key gabungan
            $table->primary(['rentals_id', 'items_id']);

            // Foreign key constraints
            $table->foreign('rentals_id')->references('id')->on('rentals')->onDelete('cascade');
            $table->foreign('items_id')->references('id')->on('items')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rentals_has_items');
    }
};
