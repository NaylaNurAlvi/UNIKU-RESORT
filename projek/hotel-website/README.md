# UNIKU Resort — Static Hotel Website (Demo)

Deskripsi singkat:
- Website statis untuk demo hotel/resort bernama *UNIKU Resort*.
- Teknologi: HTML5, CSS (inline per halaman), Bootstrap via CDN, dan JavaScript sederhana (inline per halaman).
- Struktur proyek siap di-push ke GitHub.

Struktur folder:
```
/hotel-website
│
├── index.html
├── /admin
│   ├── login.html
│   ├── dashboard.html
│   ├── kamar.html
│   ├── fasilitas.html
│   ├── pemesanan.html
├── /konsumen
│   ├── login.html
│   ├── dashboard.html
│   ├── kamar.html
│   ├── fasilitas.html
│   ├── booking.html
│   ├── history.html
└── README.md
```

Fitur utama:
- Admin: login statis (username: `admin`, password: `admin123`), kelola kamar & fasilitas (CRUD sederhana pada localStorage), lihat & ubah status pembayaran pemesanan.
- Konsumen: login (session disimpan di `localStorage`), lihat kamar & fasilitas, booking kamar (disimpan ke `localStorage` sebagai `bookings`), lihat history dan simulasi pembayaran.
- Proteksi halaman: halaman admin & konsumen akan meredirect ke halaman login jika tidak ada session.

Cara menjalankan:
1. Buka `index.html` pada browser (cukup buka file, tidak perlu server).
2. Gunakan link Admin / Konsumen di beranda.

Catatan keamanan (simulasi):
- Ini hanya demo frontend; semua data disimpan di `localStorage`.
- Jangan gunakan ini untuk data sensitif atau produksi.

Warna & desain:
- Warna utama: Kuning `#FBC02D` dan Hitam.
- Desain responsif menggunakan Bootstrap 5.

Lisensi: demo edukasi.

--
Jika ingin saya tambahkan fitur, contoh: tampilan foto kamar, pagination, atau export CSV, beri tahu saya.