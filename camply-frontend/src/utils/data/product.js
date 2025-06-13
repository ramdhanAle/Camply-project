const productData = [
  {
    img: "https://picsum.photos/id/10/600/400",  // Forest
    id: 1,
    name: "Tenda Camping Outdoor 4 Orang",
    price: 1200000,
    variants: ["Merah", "Biru", "Hijau"],
    stock: 15,
    description: "Tenda waterproof kapasitas 4 orang dengan material tahan lama. Dilengkapi flysheet dan groundsheet anti air. Cocok untuk camping keluarga.",

  },
  {
    img: "https://picsum.photos/id/11/600/400",  // Valley
    id: 2,
    name: "Tenda Dome Portable 2 Orang",
    price: 750000,
    variants: ["Hitam", "Abu-abu"],
    stock: 8,
    description: "Tenda ringan (hanya 2kg) dengan setup cepat. Ventilasi optimal dan tahan angin hingga 50km/jam. Ideal untuk backpacking.",

  },
  {
    img: "https://picsum.photos/id/12/600/400",  // Ocean
    id: 3,
    name: "Tenda Family Ukuran Besar",
    price: 2500000,
    variants: ["Coklat", "Khaki"],
    stock: 5,
    description: "Tenda keluarga 6 orang dengan 2 ruang terpisah. Frame aluminium kuat dan material 3000mm waterproof rating. Termasuk vestibule.",

  },
  {
    img: "https://picsum.photos/id/13/600/400",  // Canyon
    id: 4,
    name: "Tenda Ultralight 1 Orang",
    price: 950000,
    variants: ["Kuning", "Silver"],
    stock: 12,
    description: "Tenda solo ultra ringan (1.5kg) untuk petualang solo. Desain aerodynamic dengan waterproof coating 5000mm. Pack size sangat kecil.",

  },
  {
    img: "https://picsum.photos/id/14/600/400",  // Desert
    id: 5,
    name: "Tenda Hammock dengan Rainfly",
    price: 850000,
    variants: ["Hitam", "Hijau Army"],
    stock: 7,
    description: "Tenda hammock dengan rainfly terpisah. Nyaman untuk camping di daerah berhutan. Bisa digunakan sebagai tenda darat juga.",

  },
  {
    img: "https://picsum.photos/id/15/600/400",  // River
    id: 6,
    name: "Tenda Pop-up Instant",
    price: 650000,
    variants: ["Biru", "Orange"],
    stock: 20,
    description: "Tenda instan yang bisa dipasang dalam 10 detik. Cocok untuk festival atau camping casual. Dilengkapi dengan carrying bag.",

  },
  {
    img: "https://picsum.photos/id/16/600/400",  // Mountain
    id: 7,
    name: "Tenda Ekspedisi 4 Musim",
    price: 3500000,
    variants: ["Kuning", "Merah"],
    stock: 3,
    description: "Tenda profesional untuk kondisi ekstrim. Tahan badai salju dan angin kencang. Frame aluminium aerospace grade.",

  },
  {
    img: "https://picsum.photos/id/17/600/400",  // Waterfall
    id: 8,
    name: "Tenda Car Camping",
    price: 1800000,
    variants: ["Abu-abu", "Biru Dongker"],
    stock: 6,
    description: "Tenda luas dengan tinggi 210cm. Pintu ganda dan banyak jendela. Cocok untuk camping dengan mobil dengan ruang nyaman.",

  },
  {
    img: "https://picsum.photos/id/18/600/400",  // Forest path
    id: 9,
    name: "Tenda Anak Warna-Warni",
    price: 350000,
    variants: ["Pink", "Biru", "Hijau", "Ungu"],
    stock: 14,
    description: "Tenda kecil untuk anak-anak dengan desain lucu. Aman dan ringan. Cocok untuk backyard camping pertama anak.",

  },
  {
    img: "https://picsum.photos/id/19/600/400",  // Cliff
    id: 10,
    name: "Tenda Minimalis 2 Orang",
    price: 550000,
    variants: ["Hitam", "Silver"],
    stock: 9,
    description: "Tenda simple dengan berat hanya 1.8kg. Waterproof dan tahan UV. Ideal untuk weekend trip pasangan.",

  },
  {
    img: "https://picsum.photos/id/20/600/400",  // Sunset
    id: 12,
    name: "Tenda Glamping Mewah",
    price: 4500000,
    variants: ["Putih", "Krem"],
    stock: 4,
    description: "Tenda glamping dengan material premium. Lantai terpisah, jendela mesh, dan ruang luas. Cocok untuk glamping resort.",

  },
  {
    img: "https://picsum.photos/id/21/600/400",  // Lake
    id: 13,
    name: "Tenda Survival Emergency",
    price: 280000,
    variants: ["Orange Fluorescent"],
    stock: 22,
    description: "Tenda darurat tahan air dan angin. Pack size kecil, cocok untuk disimpan di mobil atau tas darurat.",

  }
];

export default productData;