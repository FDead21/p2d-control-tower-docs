# Manajemen Consignment Note (CN)

Modul **CN (Consignment Note / Catatan Konsinyasi)** adalah area kerja administratif utama yang digunakan oleh **Admin Pabean PJT**. Modul ini berfungsi untuk mengelola instruksi pengiriman, melacak riwayat status operasional, mengelola deklarasi pihak terkait, serta menghitung metrik dimensi kargo secara akurat.

---

## 🖥️ Ikhtisar Ruang Kerja

Halaman utama menampilkan tabel data responsif yang melacak seluruh deklarasi kepabeanan aktif, dipadukan dengan panel pelacakan status riwayat (History) di bagian kanan layar.

![CN Main Workspace](/img/cn_main.png)

### Kolom Pemantauan Aktif
* **Action Menu:** Tombol aksi cepat untuk mengeksekusi sub-proses operasional.
* **CN Number & Date:** Nomor identifikasi unik kepabeanan dan tanggal pendaftaran kargo.
* **Origin & Destination:** Titik rute pengiriman (contoh: DKI Jakarta ke Medan Area).
* **Detail Shipper & Consignee:** Nama perusahaan, alamat lengkap, dan nomor identitas legal pengirim serta penerima kargo.

---

## ➕ Membuat Catatan Konsinyasi Baru (Add CN)

Untuk menginput data pengiriman secara manual, klik tombol biru **+ CN**. Aksi ini akan membuka jendela modal dengan panduan 3 langkah (3-Step Wizard).

### Langkah 1: CN Details
Masukkan parameter jalur rute awal yang melacak profil pengiriman kargo.

![Add CN Step 1 Details](/img/cn_add_details.png)

* **CN:** Nomor referensi sistem untuk melacak lot kargo saat ini.
* **Date:** Tanggal pendaftaran dokumen ke dalam sistem.
* **Origin / Destination:** Kolom teks untuk menetapkan rute pengiriman. Klik **Next** untuk melanjutkan.

### Langkah 2: Shipper (Pengirim)
Deklarasikan data identitas legal dari pihak pengirim barang.

![Add CN Step 2 Shipper](/img/cn_add_shipper.png)

* **JNS IDPemberitahu:** Menu pilihan jenis dokumen identitas perpajakan/legalitas:
  * `NPWP 12 DIGIT`, `NPWP 10 DIGIT`, `NPWP 15 DIGIT` (Data NPWP Perusahaan/Pribadi)
  * `PASPOR` atau `KTP` (Identitas Perorangan)
* **IDPemberitahu:** Nomor registrasi resmi yang sesuai dengan jenis ID yang dipilih.
* **Name / Address / Phone / Email:** Input data profil perusahaan/perorangan yang sesuai dengan manifes fisik.

### Langkah 3: Consignee (Penerima)
Deklarasikan data identitas legal dari pihak penerima barang. Bagian ini memiliki struktur kolom yang sama persis dengan struktur data Shipper.

![Add CN Step 3 Consignee](/img/cn_add_consignee.png)

* Selesaikan pengisian dokumen identitas perpajakan serta nomor kontak yang valid, kemudian klik **Submit** untuk menyimpan data utama kontainer CN.

---

## 📦 Menginput Rincian Komoditas (Add Goods)

Setelah baris kontainer CN berhasil dibuat dan aktif, klik tombol abu-abu berlogo **+ (Plus)** untuk membuka jendela input barang. Modul ini terintegrasi langsung dengan **Sheet Excel "Goods Template"**.

![Add Goods Interface](/img/cn_add_goods.png)

### Matriks Formulir Barang
1. **Commodity Selector:** Pilih profil kelompok aset kargo standar (contoh: *Karpet, Pakaian, Sarung, Mukena, Jam Tangan, Mainan*).
2. **HSCODE Alignment:** Sistem akan otomatis mengunci Kode HS (Harmonized System) Bea Cukai yang berlaku berdasarkan komoditas yang Anda pilih.
3. **Currency & Price:** Metrik harga unit barang. Untuk operasional impor, mata uang default wajib diatur dalam **USD**.

### 📏 Kalkulator Volumetrik Dimensi Kargo
Klik tombol biru muda **+ Dimension** untuk memunculkan baris perhitungan volume secara real-time. 

Sistem menggunakan formula logis backend untuk memproses nilai:
$$\text{Sub-Volume} = \text{Jumlah Koli} \times \left( \frac{\text{Panjang (cm)} \times \text{Lebar (cm)} \times \text{Tinggi (cm)}}{1.000.000} \right)$$

* **Logika Perbandingan Berat (Chargeable Weight vs Gross Weight):** Sistem akan secara otomatis membandingkan hasil hitung Berat Volume (Volumetric CBM) dengan Berat Fisik Asli (**Gross Weight**). Nilai tertinggi di antara keduanya akan otomatis dijadikan sebagai acuan dasar biaya tagihan (**Chargeable Weight**).

---

## 🛠️ Panduan Tombol Aksi (Action Menu)

Setiap baris data CN yang aktif dilengkapi dengan matriks tombol aksi yang memiliki fungsi spesifik berikut:

| Ikon | Elemen Aksi | Fungsi Operasional | Target Output |
| :---: | :--- | :--- | :--- |
| `➕` | **Add Goods** | Menambahkan rincian item barang ke dalam CN. | Membuka formulir kalkulator barang & dimensi. |
| `📝` | **Edit Data** | Mengubah parameter data yang sudah diinput. | Membuka kembali wizard pengisian untuk revisi data. |
| `🖨️` (Biru) | **Print Label** | Mencetak label koli/boks kargo. | Mencetak stiker pelacakan rute kargo berbarcode MSA. |
| `🖨️` (Hijau) | **Print CN** | Mencetak dokumen kepabeanan resmi. | Menghasilkan cetakan fisik dokumen instruksi CN utuh. |
| `📄` | **Print Packing List** | Mencetak daftar rincian boks kargo. | Mengonversi daftar barang menjadi berkas manifes kirim. |
| `📊` | **Get Status History** | Memperbarui log waktu operasional kargo. | Memperbarui grafik lini masa riwayat status di panel kanan. |