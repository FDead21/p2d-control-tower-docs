# Manajemen Master Data (MAWB)

Modul **Master** data digunakan untuk mengelola data **Master Air Waybill (MAWB)** pada level utama. Modul ini berfungsi untuk mengonsolidasikan banyak data **Consignment Note (CN / House AWB)** individual ke dalam satu manifes penerbangan cargo guna memenuhi syarat pengiriman maskapai serta menginisialisasi permohonan pendaftaran **Entry Manifest Bea Cukai BC 1.1**.

---

## 🖥️ Area Kerja Dasbor Master

Halaman Master menampilkan visualisasi data lot kargo penerbangan secara terpusat, memudahkan pengguna memantau total jumlah koli serta akumulasi berat barang pada keseluruhan lot kargo yang terdaftar.

![Master Main Workspace](/img/master_main.png)

### Kolom Pemantauan Utama
* **AWB Number:** Nomor identifikasi legal unik yang menjadi payung utama dari bundel Master Air Waybill.
* **Airline & Flight Number:** Logistik maskapai dan nomor penerbangan aktif yang melacak rute transportasi kargo.
* **Quantity & Weight:** Kolom kalkulasi akumulatif yang melacak total jumlah barang (Coli) dan berat kotor (Kilo) dari seluruh CN anak yang terhubung.

---

## ➕ Mendaftarkan Master Air Waybill Baru (Add Master)

Klik tombol utama biru **+ Master** untuk membuka jendela panduan pengisian data konsolidasi (Wizard).

### Langkah 1: Master Details
Input elemen data transportasi menyeluruh yang melacak jalur penerbangan kargo.

![Add Master Details](/img/master_add_details.png)

* **Airwaybill:** Masukkan nomor identifikasi resmi MAWB kargo.
* **Port Origin / Port Destination:** Daftarkan gerbang bandara asal internasional dan bandara tujuan.
* **Flight & Airline:** Kode maskapai penerbangan yang menjadwalkan penarikan kargo.
* **Departure Date:** Tanggal waktu keberangkatan pesawat kargo.

### Langkah 2: Shipper (Pengirim)
Deklarasikan data pengirim global atau grup manufaktur utama asal barang kargo tersebut dikirim.

![Add Master Shipper](/img/master_add_shipper.png)

* Sesuaikan dokumen perpajakan dengan memilih **JNS IDPemberitahu** (`NPWP`, `PASPOR`, `KTP`), isi nomor seri **IDPemberitahu**, dan lengkapi profil alamat pengirim.

### Langkah 3: Consignee (Penerima)
Input data entitas penerima terminal atau agen perantara (broker) yang berwenang untuk mengklaim pengiriman kargo gabungan tersebut saat mendarat.

![Add Master Consignee](/img/master_add_consignee.png)

* Lengkapi kolom validasi agar sesuai dengan manifes dokumen kargo resmi, lalu klik **Submit** untuk menyimpan catatan kontainer Master kargo.

---

## 🔗 Proses Konsolidasi Kargo (Add CN List)

Untuk menggabungkan banyak kiriman CN individual ke dalam lot penerbangan besar ini, klik tombol aksi hijau berlogo **+ (Plus)** pada baris data terkait. Aksi ini akan membuka menu modal **Add CN List**.

![Add CN List Dropdown Selector](/img/master_add_cn_dropdown.png)

1. Menu modal akan menampilkan indeks referensi nomor induk **AWB** Master kargo tujuan.
2. Klik di dalam boks pilihan **CN List Multi-Select Input Field** untuk memunculkan daftar nomor CN individual mandiri yang telah terinput ke sistem dan belum memiliki induk.

![Add CN List Form Submit](/img/master_add_cn_main.png)

3. Pilih semua item nomor CN anak yang masuk ke dalam kelompok lot penerbangan ini.
4. Klik tombol biru **Submit** untuk mengunci hubungan data CN anak ke dokumen induk MAWB.

---

## 🛠️ Panduan Tombol Aksi Baris Master

| Elemen Ikon | Komponen Aksi | Target Operasional | Hasil Output |
| :---: | :--- | :--- | :--- |
| `➕` (Hijau) | **Add CN List** | Relasi Konsolidasi | Menghubungkan item CN anak mandiri ke dalam baris induk Master AWB ini. |
| `📝` (Kuning) | **Edit Data** | Pembaruan Parameter | Mengubah rute rincian penerbangan atau jadwal jadwal kargo jika ada revisi. |
| `🖨️` (Hijau) | **Print Manifest** | Cetak Dokumen | Mencetak berkas formulir pemetaan manifes kargo penerbangan resmi. |
| `📊` (Biru) | **Get History** | Verifikasi Log Status | Memperbarui visualisasi diagram lini masa riwayat status kargo di panel samping. |