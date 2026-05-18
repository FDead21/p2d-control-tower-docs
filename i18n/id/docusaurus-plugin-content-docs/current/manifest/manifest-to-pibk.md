# Manifest to PIBK (Peralihan Data)

Modul **Manifest to PIBK** berfungsi sebagai jembatan data yang menghubungkan kluster data manifes kepabeanan langsung ke dalam mesin perhitungan keuangan komoditas. Modul ini memungkinkan operator untuk memeriksa detail data baris barang (**Seri Barang**) di dalam lot penerbangan, lalu meneruskannya ke antrean keuangan aktif.

---

## 🖥️ Dasbor Ruang Kerja Manifest PIBK

Halaman ini melacak transisi kontainer induk saat beralih dari pendaftaran manifes dasar menuju struktur penyelesaian pajak Bea Cukai resmi.

![Manifest to PIBK Workspace View](/img/manifest_to_pibk_main.png)

### Kolom Integrasi Utama
* **PIBK Status:** Melacak apakah kelompok kargo telah menyelesaikan tahap pengolahan data keuangan:
  * `Ready` (Label Biru): Data manifes kargo telah lengkap. Modul perhitungan nilai pajak dan nilai tukar kurs mata uang siap diproses.
  * `Submitted` (Label Hijau): Pengiriman kargo telah berhasil dialihkan keluar dari tahap manifes dan kini telah aktif di dalam **Modul PIBK**.
* **Tata Letak Ekspansi Data Anak:** Mengklik tombol ikon **+ (Plus)** hijau pada baris data berstatus `Ready` akan membuka sub-tabel yang melacak detail baris barang anak:
  * Menampilkan informasi **Seri Barang**, nomor invoice rumah, total jumlah boks kargo (**Packaging Qty**), kode jenis kemasan (`PK`), berat kotor (**Bruto**), serta berat bersih (**Netto**).

---

## 🛠️ Kontrol Tombol Aksi

Setiap wadah data yang menampilkan status operasional `Ready` menyediakan akses ke dua fungsi utilitas pada kolom **Action**:

### 1. Formulir Evaluasi Keuangan (Tombol Ikon Kalkulator)
* **Tujuan:** Membuka jendela sub-modal penilaian pajak komoditas barang.
* **Fungsi:** Digunakan untuk mengonfigurasi **Kurs Value** (Nilai Tukar Mata Uang), menyesuaikan nilai **Freight**, menghitung biaya **Insurance**, serta menetapkan alokasi nilai dasar pajak (**CIF, PPH, PPN, BM**).
* *Catatan: Langkah pengisian detail lengkap untuk formulir ini didokumentasikan secara rinci pada [Panduan Kalkulasi PIBK](../pibk/calculation.md).*

### 2. Push PIBK Data (Tombol Ikon Roket Kertas / Kirim)
* **Tujuan:** Mengirimkan bundel data kargo yang telah selesai dihitung harganya menuju buku besar keuangan operasional.
* **Kegunaan:** Setelah semua perhitungan terverifikasi valid, klik tombol ini untuk mengubah status baris data menjadi `Submitted`, memindahkan data kargo dengan aman ke dalam **Modul PIBK** utama sistem.