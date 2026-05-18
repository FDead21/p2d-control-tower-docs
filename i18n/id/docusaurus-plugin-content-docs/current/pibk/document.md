# Dokumen & Pertukaran Data Elektronik PIBK

Modul **Document** berfungsi sebagai gerbang pertukaran data elektronik (EDI / Electronic Data Interchange) resmi untuk **Modul PIBK**. Modul ini digunakan oleh tim pabean untuk menyusun data perpajakan kargo ke dalam skema file elektronik standar, mengirimkan deklarasi otomatis, serta menarik data respon kepabeanan dari Bea Cukai.

---

## 🖥️ Dasbor Pertukaran Regulasi Kepabeanan

Antarmuka dokumen memetakan data Master Air Waybill konsolidasi yang telah selesai dihitung pajaknya, memantau rincian jumlah barang, serta menyediakan tombol pemicu pengiriman data otomatis.

![PIBK Document Main Dashboard](/img/pibk_document_main.png)

### Kolom Data Antarmuka
* **Master BL/AWB Number & Date:** Penanda referensi lot pengiriman kargo udara utama yang divalidasi.
* **Total House BL/AWB:** Jumlah rincian paket konsinyasi konsumen individual di dalam satu wadah lot kontainer utama.
* **Flight Name & Number:** Data identitas legal maskapai komersial pengangkut kargo.
* **Panel History (Sisi Kanan):** Grafik lini masa audit real-time yang menampilkan respon balik yang dikirimkan oleh jaringan server portal Bea Cukai.

---

## 🚀 Alur Kerja Pertukaran Data Bea Cukai (BC)

Platform ini menggunakan dua tombol transaksi elektronik pada kolom **Action** untuk memotong jalur entri data manual secara aman dan menyinkronkan berkas pabean.

### 1. Send to BC (Tombol Unggah Awan Biru Tua)
* **Tujuan Operasional:** Mengompres rincian komoditas barang, berat boks, ukuran dimensi, serta nilai kalkulasi pajak ke dalam file deklarasi kepabeanan elektronik terstandar.
* **Tindakan Pengguna:** Klik tombol ini untuk mengirimkan file deklarasi kargo kiriman Anda langsung ke dalam database server utama Bea Cukai.

### 2. Get Respon from BC (Tombol Unduh Awan Biru Muda)
* **Tujuan Operasional:** Menarik pembaruan status pemrosesan legal kargo secara langsung dari portal Bea Cukai.
* **Tindakan Pengguna:** Melakukan ping ke server Bea Cukai untuk memeriksa status pabean lot kargo terbaru.
* **Output Siklus Hidup:** Berkas respon yang disetujui akan otomatis muncul pada panel **History** dalam bentuk catatan waktu (seperti: *Data Diterima, Proses Penelitian Dokumen, Terbit Kode Billing, hingga Surat Persetujuan Pengeluaran Barang / SPPB*).

:::info Memperbarui Log Respon
Klik tombol **Ikon Refresh** melingkar di dalam baris judul blok History sisi kanan untuk memaksa proses pengerjaan sistem latar belakang memperbarui status respon tanpa perlu memuat ulang seluruh halaman web browser.
:::