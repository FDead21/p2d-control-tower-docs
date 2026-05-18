# Data Manifes & Pembaruan Bea Cukai

Modul **Manifest Data** adalah dasbor khusus yang digunakan untuk proses penyelesaian regulasi kepabeanan. Modul ini memungkinkan Petugas Manifes untuk mencocokkan data **Master Air Waybill (MAWB)**, memperbarui status data secara langsung, serta mengunduh file manifest terstruktur yang diperlukan untuk mendapatkan **Nomor Registrasi Bea Cukai BC 1.1**.

---

## 🖥️ Ikhtisar Dasbor Ruang Kerja

Antarmuka ini melacak data penerbangan massal kargo, merangkum metrik maskapai, nomor armada, waktu kedatangan kargo, serta jumlah persis HAWB anak yang terikat dalam satu tabel data terpusat.

![Manifest Data Main Table](/img/manifest_data_main.png)

### Kolom Ringkasan Data
* **Master AWB & Date:** Mengidentifikasi nomor seri lot kontainer maskapai utama.
* **Number of House AWB:** Total jumlah kiriman konsinyasi pelanggan individual di dalam lot tersebut.
* **Airline / Flight Number / IMO Number:** Kunci identifikasi logistik armada kargo udara.
* **Arrival Date & Time:** Catatan waktu jadwal mendarat pesawat kargo untuk sinkronisasi sistem.

---

## 🛠️ Panduan Tombol Aksi Kontrol

Setiap baris data Master memiliki tiga tombol utilitas khusus pada kolom **Action** untuk memproses pertukaran dokumen:

### 1. Download Manifest V1 (Tombol Unduh Kuning)
* **Tujuan:** Mengekspor lembar templat data manifes format standar lama (V1).
* **Kegunaan:** Digunakan untuk mesin pemrosesan data lama yang membutuhkan susunan baris dasar.

### 2. Download Manifest V2 (Tombol Unduh Biru)
* **Tujuan:** Mengekspor lembar manifes format modern yang telah diperluas (V2).
* **Kegunaan:** Menghasilkan matriks data akurat yang diperlukan agar kompatibel saat diunggah langsung ke portal deklarasi bea cukai modern.

### 3. Update Manifest Data (Tombol Awan Abu-abu)
* **Tujuan:** Menghubungkan sistem ke server cloud untuk menarik log status pelacakan terbaru.
* **Kegunaan:** Klik tombol ini untuk memperbarui log waktu pendaratan, mencocokkan kembali kesesuaian data, dan menyinkronkan variabel pelacakan sebelum manifes ditutup.

---

## 🖨️ Pratinjau Dokumen Regulasi Resmi

Sistem ini dilengkapi mesin cetak tata letak bawaan untuk menghasilkan dokumen fisik kargo langsung dari baris matriks manifes:

### 🏷️ Pratinjau Label Massal MAWB
Menghasilkan label plakat kontainer format besar otomatis yang dilengkapi dengan **Master QR Code** internal. Label ini ditempelkan langsung pada palet massal untuk otomatisasi proses pemindaian X-Ray gudang berkecepatan tinggi saat proses **Gate In**.

### ✈️ Lembar Dokumen House Air Waybill (HAWB)
Menghasilkan cetakan format standar legal yang melacak aturan muatan kargo udara komoditas individual. Dokumen ini merangkum kolom data yang telah dikonfigurasi saat tahap **Add Goods**:
* Kotak rincian alamat lengkap Pengirim (Shipper) & Penerima (Consignee).
* Konfigurasi jumlah barang yang jelas (**HAWB PCS**) dan total berat fisik asli (**HAWB Weight**).
* Barcode pengaman internal untuk melacak jalur pengiriman kargo secara aman di seluruh rute jaringan logistik global.