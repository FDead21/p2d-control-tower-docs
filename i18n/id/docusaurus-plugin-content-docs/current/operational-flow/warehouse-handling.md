# Penanganan Gudang & Pemeriksaan Kepabeanan

Bagian ini merinci operasional internal gudang, logistik tata letak penyortiran, dan titik pemeriksaan validasi pabean di **Gudang TPS PJT MSA**.

## ⏱️ Target Waktu Pengolahan (Lead Time): 60 Menit
Target waktu kinerja sejak kargo diterima di gudang Lini-1 hingga selesai disortir dan diperiksa di dalam gudang MSA adalah **60 menit**.

---

## 👥 Tanggung Jawab Berdasarkan Peran

### 1. Tim Trafik (Target: 15 Menit)
* **Penerimaan Kargo:** Menerima fisik barang muatan dari tim operasional Lini-1.
* **Verifikasi Sebelum Muat:** Melakukan pemeriksaan ulang pada semua segel pelacakan sebelum kargo dimuat.
* **Pengiriman Transit:** Membawa truk kargo yang tersegel dengan aman dari Gudang Lini-1 ke gudang TPS PJT MSA.

### 2. Admin Pabean PJT (Target: 5 Menit)
* **Unggah Data:** Mengunggah data deklarasi inti berdasarkan data Fix Pre-Alert yang telah dikunci (Master AWB, data CN, Invoice, Packing List, NPWP Consignee, BC 1.1, dan perhitungan nilai pabean).
* **Submit CN:** Mengirimkan dokumen Catatan Konsinyasi (CN) digital langsung ke portal sistem bea cukai.
* **Manajemen Respon:** Memantau indikator status respon sistem secara real-time:
  * **Data Diterima / Diverifikasi:** Langsung lanjut ke proses pengeluaran fisik.
  * **Terbit Pemeriksaan:** Mengajukan dan mengoordinasikan pemeriksaan fisik barang bersama petugas Bea Cukai.
* **Eksekusi Pengeluaran:** Menerima dan mencetak dokumen **SPPB** (Surat Persetujuan Pengeluaran Barang) serta mengajukan pengeluaran barang ke gudang.
* **Kondisi Khusus (BC 2.3):** Mengajukan permohonan pembuatan Segel Kertas Bea Cukai resmi secara manual.
* **Siklus Tagihan (Billing):** Mengonsolidasikan dan menerbitkan billing bea masuk & pajak secara berkala setiap pukul **24:00** untuk seluruh pengiriman yang diproses hari itu.

### 3. Admin Gudang TPS MSA
* **Rencana Inbound:** Menerima data Fix Pre-Alert untuk memetakan lokasi alokasi ruang penyimpanan dan mempersiapkan tenaga bongkar muat.
* **Integrasi Bea Cukai:** Melakukan submit data elektronik **Gate In** melalui sistem TPS Online segera setelah truk masuk.
* **Logistik Outbound:** Menerbitkan Delivery Order (DO) internal, mempersiapkan barang keluar, membuat laporan harian, dan melakukan submit data elektronik **Gate Out** melalui TPS Online.

### 4. Operasional Gudang TPS MSA (Kru Lapangan)
* Melakukan proses **Bongkar Barang (Unloading)** di area inbound.
* Mengarahkan kargo melalui jalur **Pemindaian X-Ray & Penyortiran**.
* Mengalokasikan paket ke dalam sub-zona penyimpanan khusus:
  * **Storage Area** (Profil kargo standar)
  * **Inspection Area** (Area pemeriksaan fisik Bea Cukai)
  * **DG Area** (Penanganan Dangerous Goods / Barang Berbahaya)
  * **Abandoned Item Area** (Area barang rusak atau bermasalah)
* Melakukan pemeriksaan akhir, pengemasan ulang (packing), dan **Pemuatan Barang (Loading)** ke armada pengiriman keluar (delivery).