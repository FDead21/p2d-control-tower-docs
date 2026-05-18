# Modul Kalkulasi Pajak PIBK

Modul **PIBK Calculation** adalah mesin pembukuan keuangan dan penilaian nilai pabean inti dari platform Control Tower. Modul ini dikelola oleh **Admin Pabean PJT** untuk menghitung besaran pajak impor, nilai konversi mata uang kurs, mengaudit komponen Biaya, Asuransi, dan Navigasi (**CIF**), serta menetapkan akumulasi total tagihan setoran pajak negara.

---

## 🖥️ Dasbor Penilaian Metrik Keuangan

Halaman utama melacak rincian nilai transaksi komoditas keuangan dari setiap House Air Waybill (HAWB) secara transparan sebelum menghasilkan dokumen cetak pungutan pabean resmi.

![PIBK Calculation Main Dashboard](/img/pibk_calc_main.png)

### Matriks Komponen Keuangan
* **NDPBM (USD):** Nilai Dasar Perhitungan Bea Masuk berupa patokan kurs mata uang asing resmi yang ditetapkan oleh Kementerian Keuangan.
* **FOB (Free On Board):** Nilai harga beli bersih barang komoditas di negara asal sebelum pengiriman.
* **Insurance & Freight:** Komponen biaya premi perlindungan risiko kargo dan biaya sewa angkut logistik pesawat kargo.
* **CIF:** Nilai total pabean gabungan harga barang, asuransi, dan biaya angkut van logistik.
* **BM / PPH / PPN:** Rincian pos pungutan negara berupa Bea Masuk, Pajak Penghasilan, dan Pajak Pertambahan Nilai.
* **Total Paid:** Jumlah akumulasi nominal kotor keseluruhan pajak yang wajib dilunasi untuk merilis lot kargo dari gudang pabean.

---

## 🧮 Memproses Perhitungan Pajak (Form Price)

Untuk menghitung atau mengubah bobot nilai pajak impor pada baris barang tertentu:

1. Pilih baris kargo yang ingin diproses pada tabel data utama, lalu klik tombol aksi biru berlogo **Kalkulator**. Langkah ini akan membuka jendela modal **Form Price**.

<!-- ![Form Price Configuration Modal](/img/pibk_price_form.png) -->

2. **MAWB Data:** Sistem otomatis mengunci nomor induk `Master BL/AWB Number` dan penanda internal `Id Barang` kargo target.
3. **Kurs Data:** Masukkan parameter regulasi nilai pasar yang berlaku saat ini:
   * **Kurs Value:** Input angka pengali nilai konversi Rupiah (IDR) berdasarkan regulasi NDPBM aktif.
   * **Freight Value:** Deklarasikan besaran porsi biaya angkut kargo udara terkait.
   * **Insurance Value:** Masukkan besaran nominal premi perlindungan risiko kargo barang.
4. **Alokasi Data Harga (Price Data):** Input persentase tarif regulasi atau verifikasi kolom hasil kalkulasi otomatis sistem:
   * **CIF Value:** Dasar perhitungan nilai pabean yang dievaluasi menggunakan formula dasar:
   
     $$CIF = \text{FOB} + \text{Insurance} + \text{Freight}$$
     
   * **BM Value:** Nilai nominal Bea Masuk kargo hasil perkalian komponen:
   
     $$BM = CIF \times \text{Kurs Value} \times \text{Tarif Bea Masuk}$$
     
   * **PPN / PPH Values:** Nominal pungutan pajak dalam negeri yang dihitung berdasarkan akumulasi nilai pabean kontainer kargo:
   
     $$PPN = (CIF \times \text{Kurs Value} + BM) \times \text{Tarif PPN}$$
     
5. Klik tombol biru **Save Data** (atau **Update Data**) untuk mengeksekusi dan menyimpan kalkulasi nilai keuangan ke sistem.

---

## 🎯 Konfirmasi Sukses Perhitungan

Setelah sistem backend berhasil memproses keseluruhan variabel hitung perpajakan pabean kargo, platform akan menampilkan kotak dialog notifikasi browser.

![Calculation Success Alert Dialog](/img/pibk_calc_alert.png)

Klik **OK** untuk menutup kotak notifikasi. Sistem secara otomatis memperbarui baris kolom tabel data Anda dan mengunci nominal akhir total biaya tagihan perpajakan di dalam kolom dasbor **Total Paid**.