// Tugas Pertemuan 3 - Sistem Manajemen Produk Toko Online

// array produkToko isinya data produk awal
// tiap produk berbentuk object (id, nama, harga, stok)
let produkToko = [
  {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
  {id: 2, nama: "Mouse", harga: 200000, stok: 10},
  {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// fungsi tambahProduk
// dipakai buat nambah produk baru ke array produkToko
function tambahProduk(nama, harga, stok) {
  let idBaru;

  // kalau array masih kosong id mulai dari 1
  // kalau sudah ada isi, id baru = id produk terakhir + 1
  if (produkToko.length == 0) {
    idBaru = 1;
  } else {
    idBaru = produkToko[produkToko.length - 1].id + 1;
  }

  // push = masukin data baru ke urutan paling akhir array
  produkToko.push({id: idBaru, nama: nama, harga: harga, stok: stok});
  console.log("Produk " + nama + " berhasil ditambahkan");
}

// fungsi hapusProduk
// dipakai buat hapus produk berdasarkan id
function hapusProduk(id) {
  let ditemukan = false;

  // cek satu-satu isi array pakai for
  for (let i = 0; i < produkToko.length; i++) {
    // kalau id produk sama dengan id yang dicari
    if (produkToko[i].id == id) {
      // splice(posisi, jumlah) = hapus 1 data di posisi ke-i
      produkToko.splice(i, 1);
      ditemukan = true;
      break; // sudah ketemu, loop dihentikan
    }
  }

  if (ditemukan) {
    console.log("Produk dengan id " + id + " berhasil dihapus");
  } else {
    console.log("Produk dengan id " + id + " tidak ditemukan");
  }
}

// fungsi tampilkanProduk
// dipakai buat nampilin semua produk yang ada di array
function tampilkanProduk() {
  console.log("Daftar Produk:");

  // kalau array kosong, tampilkan pesan saja
  if (produkToko.length == 0) {
    console.log("Belum ada produk");
  }

  // looping tiap produk lalu dicetak
  for (let i = 0; i < produkToko.length; i++) {
    console.log(
      "ID: " + produkToko[i].id +
      " | Nama: " + produkToko[i].nama +
      " | Harga: Rp. " + produkToko[i].harga +
      " | Stok: " + produkToko[i].stok
    );
  }
  console.log("----------------------------------------");
}

// ===== Pemanggilan fungsi =====

// 1. tampilkan daftar produk awal
tampilkanProduk();

// 2. tambah produk baru lalu tampilkan lagi
tambahProduk("Monitor", 1500000, 8);
tampilkanProduk();

// 3. hapus produk dengan id 2 (Mouse) lalu tampilkan lagi
hapusProduk(2);
tampilkanProduk();
