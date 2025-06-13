<?php

namespace Database\Seeders;

use App\Models\Transaction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Transaction::create([
            'order_number' => 'ORD-002',
            'customer_id' => 1,
            'book_id' => 1,
            'quantity' => 1,
            'total_amount' => 99000.00,
        ]);

        Transaction::create([
            'order_number' => 'ORD-001',
            'customer_id' => 1,
            'book_id' => 5,
            'quantity' => 2,
            'total_amount' => 120000.00,
        ]);
    }
}