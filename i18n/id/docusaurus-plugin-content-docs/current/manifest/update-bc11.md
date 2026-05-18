# Pembaruan Data Manifes BC11

Modul **Update BC11** adalah portal khusus pelacakan regulasi kepabeanan. Modul ini digunakan oleh Admin Manifes untuk mencatat, memperbarui, dan memantau secara manual nomor **BC 1.1 (Manifes Pajak Impor)** resmi serta **Nomor Pengajuan AJU** setelah kantor Bea Cukai merilis nomor pendaftaran resmi kargo pesawat yang tiba.

---

## 🖥️ Ringkasan Dasbor Ruang Kerja BC11

Halaman dasbor utama memantau siklus hidup izin regulasi kepabeanan dari dokumen Master Air Waybill yang aktif di sistem.

![Manifest BC11 Main Dashboard](/img/bc11_main.png)

### Kolom Pemantauan Utama
* **Ref Number / No AJU:** 26 digit nomor unik pendaftaran pabean yang melacak pengajuan entri impor barang.
* **BC11 Number & Date:** Nomor dan tanggal manifes legal resmi yang diterbitkan langsung oleh kantor Bea dan Cukai Indonesia.
* **BC11 Status:** Mencerminkan tingkatan sinkronisasi data kepabeanan saat ini:
  * `Ready` (Label Biru): Wadah data dasar penerbangan kargo telah sepenuhnya dikonsolidasikan dan siap menerima input variabel nomor manifes.
  * `Submitted` (Label Hijau): Parameter legal nomor BC11 telah dikunci dan disimpan ke dalam database manifes penerbangan.

---

## 📝 Menginput / Memperbarui Parameter BC11

Ketika manifes kargo penerbangan telah mendapatkan nomor verifikasi resmi dari Bea Cukai, operator wajib menginput nilai tersebut agar alur data pada **Modul PIBK** terbuka.

1. Cari baris data kargo target Anda di dalam tabel data utama.
2. Di bawah kolom **Action**, klik tombol biru berlogo **Pensil / Edit** untuk membuka jendela modal **Form BC11**.

![Form BC11 Entry Layout](/img/bc11_form.png)

3. Periksa kembali parameter referensi pelacakan yang muncul:
   * **Master BL/AWB Number:** Kolom referensi terkunci (read-only) yang menandai lot kontainer kargo tujuan.
4. Masukkan urutan nomor data resmi yang tertera pada lembar dokumen fisik Bea Cukai Anda:
   * **BC11 Number:** Input nomor manifes berkas kargo resmi.
   * **BC11 Date:** Pilih tanggal kalender resmi perilisan pendaftaran manifes kargo.
   * **AJU Number:** Konfirmasi atau perbarui 26 digit nomor urut pengajuan deklarasi barang kiriman.
   * **POS Number:** Tentukan nomor posisi baris kargo kiriman spesifik Anda di dalam bundel manifes induk muatan pesawat kargo.
5. Klik tombol biru **Update Data** (atau **Save Data**) untuk mengunci perubahan ke dalam database sistem.

---

## ☁️ Menarik Sinkronisasi Data Bea Cukai Otomatis

Jika platform Anda telah terhubung langsung dengan sistem gateway portal Bea Cukai menggunakan sistem pertukaran data elektronik (EDI), klik tombol abu-abu berlogo **Unduh Awan** bertuliskan **"Get BC11"** pada kolom aksi. Aksi ini akan secara otomatis melakukan ping ke database Bea Cukai untuk menarik nomor manifes yang terverifikasi tanpa perlu mengetik manual.