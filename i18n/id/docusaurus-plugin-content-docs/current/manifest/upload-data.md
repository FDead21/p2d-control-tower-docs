# Upload Data (Pemeliharaan File)

Modul **Upload Data** memungkinkan tim Trafik dan Admin Manifes untuk melakukan inisialisasi awal data pengiriman kargo pesawat menggunakan templat Excel standar. Tahap ini mengawali tahapan operasional **Pre-Alert**.

---

## 📥 Langkah 1: Mengunduh Templat Standar

Sebelum mengunggah data pengiriman apa pun, Anda harus memastikan bahwa file Excel Anda sudah cocok dengan format struktural sistem dengan sempurna.

1. Buka menu **Manifest** ➔ **Upload Data** dari bilah navigasi samping (sidebar).
2. Klik tab **Download Files** yang berada di bagian atas kartu antarmuka.
3. Klik tombol biru besar bertuliskan **Download Template**.

![Layar Unduh Templat](/img/manifest_download.png)

4. Buka file Excel yang telah diunduh dan isi baris data sesuai dengan parameter manifest kargo yang masuk (*M-AWB, H-AWB, Komoditas, Berat, Jumlah barang/Coli, dll.*).

---

## 📤 Langkah 2: Mengunggah Manifes Pre-Alert

Setelah lembar data Excel Anda terisi dengan benar, Anda dapat memasukkannya ke dalam ekosistem sistem Control Tower.

1. Alihkan kembali tab menu ke tab **Upload Files**.
2. Tarik dan lepas (drag & drop) file Excel Anda yang sudah siap langsung ke dalam kotak putus-putus bertuliskan **"Drop files here to upload"**. Anda juga bisa mengklik area tersebut untuk mencari file dari penyimpanan komputer Anda.

![Area Unggah File](/img/manifest_upload.png)

3. Periksa kembali nama file yang muncul di baris konfirmasi.
4. Klik tombol biru berlogo **Pesawat Kertas / Kirim** yang terletak tepat di atas area drop file untuk memproses manifes ke dalam database sistem.

:::tip Peringatan Validasi
File yang memiliki tajuk kolom yang salah, kolom wajib yang kosong (seperti nomor seri M-AWB tidak diisi), atau nilai non-USD di kolom invoice akan otomatis gagal dalam pengecekan validasi. Jika terjadi kegagalan, silakan unduh ulang templat dan periksa kembali data inputan Anda.
:::

---

## 📊 Memahami Struktur 3-Sheet pada Templat Excel

Templat Excel standar menggunakan tiga lembar kerja (sheet) terpisah untuk mengisi database dengan benar. Jika ada tab yang hilang atau data baris tidak sinkron antar sheet, sistem akan memicu kegagalan validasi.

### 1. Sheet "Header"
Sheet ini menetapkan parameter transportasi pengiriman secara keseluruhan. Data ini masuk langsung ke modul **Pre-Alert** dan **Entry Manifest (BC 1.1)** untuk mencocokkan jadwal pesawat/kapal.

![Template Header Sheet](/img/template_header.png)

* **Kolom Utama:** `CALL SIGN`, `IMO NUMBER`, `ORIGIN` (Bandara Asal), `DESTINATION` (Bandara Tujuan), `NO VOYAGE / ARRIVAL`, `ARRIVAL DATE / TIME` (Tanggal/Jam Kedatangan).
* **Kegunaan:** Mengonfirmasi ke sistem *kapan* dan *bagaimana* kargo datang, sehingga sistem bisa melacak nomor rekonsiliasi manifes kepabeanan BC 1.1 yang tepat.

### 2. Sheet "Detail"
Sheet ini melacak ukuran fisik kemasan kargo dan invoice rumah (house invoice). Data ini sangat penting digunakan saat proses pemilahan gudang pada tahap **TPS Online (Gate In / Gate Out)**.

![Template Detail Sheet](/img/template_detail.png)

* **Kolom Utama:** `INVOICE NUMBER / DATE`, `PACKAGING QTY` (Jumlah Kemasan), `TYPE OF PACKAGING` (Jenis Kemasan, contoh: PK/Peti), `BRUTO ON KG` (Berat Kotor), `NETTO ON KG` (Berat Bersih), `VOLUME`.
* **Kegunaan:** Memberikan informasi kepada admin gudang mengenai bentuk fisik kargo, dimensi ukuran, serta berat boks agar tidak terjadi selisih (discrepancy) saat kargo melewati pemeriksaan fisik X-Ray.

### 3. Sheet "Goods"
Sheet ini berisi rincian barang per item dari setiap komoditas di dalam paket tersebut. Data ini terintegrasi langsung dengan modul pemrosesan **CN (Consignment Note) Barang Kiriman** dan **Modul PIBK**.

![Template Goods Sheet](/img/template_goods.png)

* **Kolom Utama:** `HS CODE`, `NAME OF GOODS` (Deskripsi Nama Barang), `CURRENCY` (Mata Uang, wajib USD), `PRICE` (Harga), `INSURANCE` (Asuransi).
* **Kegunaan:** Menyediakan elemen data regulasi kepabeanan. Sistem membaca nilai `HS CODE` dan `PRICE` di sheet ini untuk menghitung pungutan impor secara otomatis (**BMPDRI**) serta memicu respon pengeluaran Bea Cukai (**SPPBMCP**).