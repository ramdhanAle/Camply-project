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
        Schema::create('checklists', function (Blueprint $table) {
            $table->id();
            $table->string('tittle', 100); // typo asli dari ERD, bisa diubah ke 'title' jika perlu
            $table->string('type', 45);
            $table->dateTime('created_at')->nullable();
            $table->unsignedBigInteger('users_id');

            // Foreign key ke tabel users
            $table->foreign('users_id')->references('id')->on('users')->onDelete('cascade');

            // Laravel style: tambahkan updated_at juga agar sesuai konvensi
            $table->timestamp('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('checklists');
    }
};
