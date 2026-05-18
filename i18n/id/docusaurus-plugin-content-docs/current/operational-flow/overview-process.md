
### 2. Indonesian Version
**File Path:** `i18n/id/docusaurus-plugin-content-docs/current/operational-flow/overview-process.md`

```markdown
# Ikhtisar Proses Impor TPS PJT

Bagian ini membahas pemetaan integrasi sistem end-to-end untuk **Proses Impor TPS PJT di MSA Kargo**. Alur kerja ini melacak pergerakan pengiriman dari bandara asal, validasi pabean, penanganan gudang, hingga pengiriman akhir menggunakan armada transportasi.

## 🔄 Jalur Integrasi Sistem (End-to-End)

Alur operasional sistem terdiri dari 6 tahapan integrasi teknis utama:

```text
[PRE-ALERT] ➔ [ENTRY MANIFEST] ➔ [PLP ONLINE] ➔ [TPS ONLINE] ➔ [CN BARANG] ➔ [TMS]
1. Pre-Alert (Inisialisasi Data)
Tindakan: Pengiriman data kedatangan via API / unggah file Excel.

Batasan Waktu: Harus diselesaikan 12 jam sebelum pesawat lepas landas.

Data Utama yang Diperlukan: M-AWB, H-AWB, Detail Komoditas, HS Code, Coli, Kilo, Dimensi, Packing List, Manifest Kargo, Invoice (USD), NPWP Penerima (Consignee), Detail Penerbangan.

2. Entry Manifest (BC 1.1)
Tindakan: Pengiriman dokumen ke sistem manifest kepabeanan.

Batasan Waktu: Diproses 3 jam sebelum pesawat mendarat.

Hasil: Mendapatkan nomor registrasi resmi BC 1.1.

3. PLP Online (Pindah Lokasi Penimbunan)
Tindakan: Pengajuan permohonan pemindahan lokasi penimbunan kargo.

Hasil: Mendapatkan Nomor PLP resmi untuk memindahkan kargo dari apron utama bandara ke gudang lini penimbunan sementara.

4. TPS Online (Penanganan Gudang Sementara)
Tindakan: Pemindaian fisik kargo masuk di gerbang gudang (Gate In).

Proses: Pemeriksaan mesin X-Ray oleh petugas Bea Cukai untuk menentukan lokasi alokasi (kargo umum, Dangerous Goods, atau Area Barang Rusak/Bermasalah).

5. CN (Consignment Note) Barang Kiriman
Tindakan: Pembuatan draf dokumen Catatan Konsinyasi (CN).

Proses: Pencocokan HS Code otomatis, perhitungan pungutan impor (BMPDRI), dan penerbitan surat persetujuan pengeluaran barang (SPPBMCP).

6. Transport Management System (TMS)
Tindakan: Penjadwalan armada dan pelacakan pengiriman keluar gudang (Gate Out).

Proses: Memantau status transit armada secara real-time dan memperbarui status Open API.
```