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
        Schema::create('gear_guides', function (Blueprint $table) {
            $table->id();
            $table->string('camping_type', 45);
            $table->text('tips')->nullable();
            $table->timestamps(); // created_at dan updated_at otomatis
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gear_guides');
    }
};
