# Pemantauan Respon Bea Cukai (All Response)

Modul dasbor **All Response** adalah pusat pelacakan regulasi khusus di bawah kategori menu **Response Data**. Modul ini berfungsi sebagai pusat audit terpadu yang merangkum, menyaring, dan mencatat seluruh berkas respon elektronik, peringatan pembatasan, nota perpajakan, serta surat persetujuan pengeluaran kargo yang dikirim dari jaringan sistem Bea dan Cukai.

---

## 📑 Filter Tab & Tombol Kontrol Antarmuka

Ruang kerja ini diatur ke dalam beberapa tab penyaringan data berdasarkan kode respon kepabeanan spesifik. Fitur ini memudahkan Admin Pabean untuk memisahkan kiriman bermasalah atau mengunduh slip pengeluaran barang secara instan.

### 🔄 Tombol Sinkronisasi Data Kontrol
Klik tombol pilihan (dropdown) di sudut kanan atas kartu antarmuka, lalu pilih **"Get All Response"**. Aksi ini akan memicu permintaan pembaruan sistem global untuk menarik dan memperbarui seluruh antrean respon pabean yang tertunda.

### 🗂️ Matriks Kode Respon Bea Cukai
Antarmuka memisahkan notifikasi pabean yang masuk ke dalam susunan tab khusus berdasarkan kode resmi sistem Bea Cukai:

* **All:** Menampilkan seluruh riwayat alur log status pelacakan kargo secara kronologis dari semua lot yang terdaftar.
* **Terbit Billing (303):** Menampilkan kiriman kargo yang telah berhasil mendapatkan struktur kode billing pembayaran pajak impor resmi dari negara.
* **NPBL (304) & SPBL (306):** Menampilkan kargo yang terkena holding regulasi lartas (*Nota Pembetulan / Surat Pemberitahuan Barang Larangan & Pembatasan*) yang membutuhkan tinjauan dokumen pendukung lanjutan.
* **SPPBMCP (401):** Menampilkan surat persetujuan pengeluaran barang kiriman udara otomatis yang diproses melalui jalur pos/penyelenggara pos.
* **SPTNP (402):** Menyaring dokumen nota pembetulan nilai pabean (*Surat Penetapan Tarif dan/atau Nilai Pabean*) yang terbit apabila petugas bea cukai melakukan penyesuaian tarif pajak komoditas.
* **SPPB (403/404):** Menampilkan dokumen legal kelulusan kargo akhir (**Surat Persetujuan Pengeluaran Barang**) yang menandakan kargo telah lolos clearance dan siap dikeluarkan dari gudang.

---

## 📊 Kolom Buku Besar Log Respon

Setiap sub-tabel penyaringan memiliki struktur kolom tabel standar untuk memudahkan proses audit data pengiriman kargo:

| Tajuk Kolom | Definisi Fungsional Operasional |
| :--- | :--- |
| **Goods Number** | Nomor identitas unik pelacakan item kargo komoditas di dalam sistem. |
| **Response Code & Detail** | Angka urutan kode pelacakan pabean resmi yang dipasangkan dengan teks rincian artinya. |
| **Datetime of Record** | Catatan waktu riwayat tanggal dan jam presisi saat platform menangkap file respon dokumen elektronik. |
| **Office Code** | Kode kantor cabang Bea Cukai wilayah terkait yang memproses pemeriksaan kargo (contoh: KPPBC CGK). |
| **PIBK Number & Date** | Nomor registrasi perpajakan legal kargo kiriman impor yang diberikan oleh negara. |
| **PDF** | Tautan unduh cepat (click-to-download) untuk mengambil salinan dokumen digital asli dari sertifikat Bea Cukai terkait. |