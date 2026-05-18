# Database Referensi Kode HS (HS-CODE)

Modul **HS-CODE List** berfungsi sebagai direktori pencarian master utama sistem untuk kode klasifikasi tarif komoditas barang berdasarkan data resmi Bea Cukai Indonesia. Modul referensi ini bertindak sebagai tempat penyimpanan data otomatis yang menyuplai nilai persentase bea masuk, pajak, dan tarif pabean langsung ke kolom data **Manajemen Manifest** dan **Modul PIBK**.

---

## 🔍 Matriks Tabel Database Referensi

Halaman kerja ini beroperasi sebagai tabel grid data yang dapat dicari secara real-time. Elemen data dibagi ke dalam delapan parameter pelacakan inti untuk mencocokkan setiap item komoditas barang dengan tingkat tarif perpajakan regulasi nasional yang tepat:

| Tajuk Tabel | Tujuan Kolom Data | Nilai Fungsional Operasional |
| :--- | :--- | :--- |
| **NO.** | Penghitung Baris | Penanda nomor urut baris data numerik di dalam tabel. |
| **HS CODE** | Kunci Tarif Sistem | Seri nomor kode standar internasional yang digunakan untuk mengklasifikasikan jenis barang kiriman impor. |
| **Uraian Barang** | Identitas Legal Lokal | Deskripsi teks legal Bahasa Indonesia yang merinci jenis profil komoditas barang. |
| **Description of Goods** | Identitas Global | Terjemahan teks Bahasa Inggris resmi dari parameter deskriptif komoditas barang terkait. |
| **BM (%)** | Tarif Dasar Bea Masuk | Persentase tarif pungutan negara yang dikenakan pada komoditas kargo impor yang masuk. |
| **BK (%)** | Tarif Dasar Bea Keluar | Persentase tarif pajak yang diterapkan apabila komoditas kargo keluar meninggalkan pelabuhan domestik. |
| **PPN (%)** | Pajak Pertambahan Nilai | Persentase tarif pajak konsumsi dalam negeri standar yang diatur oleh undang-undang nasional. |
| **PPN BM** | Tingkat Pajak Barang Mewah | *Pajak Penjualan atas Barang Mewah* — Nilai persentase tambahan yang khusus melacak kelompok barang kategori mewah. |

---

## ⚙️ Integrasi Sistem Alur Kerja Otomatis

Operator tidak perlu mencari atau menghitung nominal persentase pajak secara manual satu per satu saat menginput item barang kargo. Infrastruktur database relasional platform mengandalkan modul referensi ini secara otomatis:

1. Ketika operator memilih kelompok profil komoditas barang standar di dalam formulir **Add Goods**, sistem backend akan langsung mencari data tersebut ke dalam pohon database referensi ini.
2. Platform akan mengambil parameter data baris yang cocok, mengunci string kode regulasinya, dan otomatis mengisi kolom input aktif Anda dengan persentase **BM, PPN, dan PPH** yang telah ditentukan.
3. Sinkronisasi data otomatis ini memastikan seluruh persamaan rumus keuangan Anda terbebas dari kesalahan (human-error) saat tahap **Kalkulasi Pajak PIBK**.