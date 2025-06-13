<?php

namespace Database\Seeders;

use App\Models\Gear;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         Gear::create([
            'name' => 'Tenda Dome',
            'description' => 'Tenda dome berbahan polyester anti air yang mampu menampung hingga 3 orang dewasa. Mudah dipasang, ringan, dan dilengkapi dengan pasak serta tali pengikat untuk memastikan kestabilan di berbagai medan.',
            'image_url' => 'https://picsum.photos/500/501',
            'price_per_day' => 30000,
            'stock' => 5,
        ]);

        Gear::create([
            'name' => 'Matras Gulung',
            'description' => 'Matras gulung berbahan busa ringan yang empuk dan mudah dibawa. Memberikan kenyamanan ekstra saat tidur di alam terbuka serta membantu mengisolasi tubuh dari dinginnya tanah.',
            'image_url' => 'https://picsum.photos/500/502',
            'price_per_day' => 10000,
            'stock' => 15,
        ]);

        Gear::create([
            'name' => 'Kompor Portable',
            'description' => 'Kompor portable berbahan stainless steel dengan sistem pemantik otomatis. Cocok digunakan untuk memasak air, mie instan, atau makanan ringan selama perjalanan camping.',
            'image_url' => 'https://picsum.photos/500/503',
            'price_per_day' => 15000,
            'stock' => 8,
        ]);

        Gear::create([
            'name' => 'Sleeping Bag',
            'description' => 'Sleeping bag tipe mummy dengan bahan dalam polar fleece dan lapisan luar anti air. Didesain untuk menjaga suhu tubuh tetap hangat di malam hari dengan suhu minimal hingga 5°C.',
            'image_url' => 'https://picsum.photos/500/504',
            'price_per_day' => 20000,
            'stock' => 10,
        ]);

        Gear::create([
            'name' => 'Carrier 40L',
            'description' => 'Carrier berkapasitas 40 liter, ideal untuk pendakian singkat 1-2 hari. Memiliki banyak kompartemen, tali dada dan pinggang yang dapat disesuaikan, serta bantalan punggung ergonomis.',
            'image_url' => 'https://picsum.photos/500/505',
            'price_per_day' => 25000,
            'stock' => 6,
        ]);

        Gear::create([
            'name' => 'Carrier 60L',
            'description' => 'Tas carrier berukuran 60 liter dengan rangka aluminium internal untuk distribusi beban yang lebih baik. Cocok untuk perjalanan panjang dengan muatan lebih banyak dan berat.',
            'image_url' => 'https://picsum.photos/500/506',
            'price_per_day' => 30000,
            'stock' => 7,
        ]);

        Gear::create([
            'name' => 'Jas Hujan',
            'description' => 'Jas hujan berbahan PVC yang ringan dan tahan air, lengkap dengan tudung kepala dan resleting anti air. Cocok digunakan saat hujan di tengah perjalanan atau camping.',
            'image_url' => 'https://picsum.photos/500/507',
            'price_per_day' => 8000,
            'stock' => 12,
        ]);

        Gear::create([
            'name' => 'Headlamp',
            'description' => 'Lampu kepala LED yang ringan dan tahan air, memiliki tiga mode pencahayaan: terang, redup, dan SOS. Cocok digunakan saat trekking malam atau aktivitas di tenda.',
            'image_url' => 'https://picsum.photos/500/508',
            'price_per_day' => 7000,
            'stock' => 10,
        ]);

        Gear::create([
            'name' => 'Cooking Set Mini',
            'description' => 'Satu set alat masak mini yang terdiri dari panci, wajan, sendok lipat, dan mangkuk. Terbuat dari aluminium ringan yang tahan panas dan mudah dibersihkan.',
            'image_url' => 'https://picsum.photos/500/509',
            'price_per_day' => 12000,
            'stock' => 9,
        ]);

        Gear::create([
            'name' => 'Trekking Pole',
            'description' => 'Sepasang tongkat trekking berbahan aluminium alloy dengan pegangan ergonomis dan sistem penguncian cepat. Membantu menjaga keseimbangan di medan curam atau licin.',
            'image_url' => 'https://picsum.photos/500/510',
            'price_per_day' => 10000,
            'stock' => 8,
        ]);

        Gear::create([
            'name' => 'Gaiter Kaki',
            'description' => 'Pelindung kaki dari debu, lumpur, dan kerikil. Dikenakan di atas sepatu dan betis, sangat berguna saat melalui jalur berlumpur atau berpasir.',
            'image_url' => 'https://picsum.photos/500/511',
            'price_per_day' => 6000,
            'stock' => 10,
        ]);

        Gear::create([
            'name' => 'Sepatu Gunung',
            'description' => 'Sepatu gunung berlapis bahan anti air dengan sol grip tinggi untuk memberikan traksi di bebatuan licin. Nyaman digunakan untuk hiking atau mendaki gunung.',
            'image_url' => 'https://picsum.photos/500/512',
            'price_per_day' => 25000,
            'stock' => 5,
        ]);

    }
}
