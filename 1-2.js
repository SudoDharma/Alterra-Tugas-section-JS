var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;   //Di soal bernilai false
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = "Indonesia";
  return console.log(
    "Perkenalkan nama saya " +
    nama + 
    " nomor urut " +
    a +
    " sekarang sedang mengikuti " +
    b +
    "berasal dari " +
    asal
  );
}

if(terdaftar === true){
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

// a = b;
// nama = b;   

// console.log("asal diakses = " + asal);           //Bagian kode ini (baris 26 dan 28) membuat error jadi saya comment dan pindahkan ke bawah
// console.log("a adalah = " + a);
// console.log("b adalah = " + b);



//TUGAS
//  1.Tulis kode di atas lalu jawab pertanyaan dibawah!
//  a.Ambilah index ke 2 dalam array di baris 5 dan tampilkan di console!         Jawaban : ada di baris ke-42
//  b.Ubah kode di atas sehingga dapat menampilkan baris 22 di dalam console!     Jawaban : ubah nilai let terdaftar di baris ke-4 menjadi true
//  c.Lakukan pemanggilan untuk function perkenalan!                              Jawaban : ada di baris ke-45
//  d.Tampilkan output sesuai pada soal!                                          Jawaban : ada di baris 42 sampai baris 45

a = b;
console.log("array = " + lengkap_arr[2]);
console.log("a adalah = " + a); 
console.log("b adalah = " + b);
perkenalan();


//  2.Jawab pertanyaan di bawah
//  a.Jelaskan kenapa baris 21,22 dan 23 tidak dapat tampil!
//  Jawaban :
//  Karena nilai dari variabel terdaftar adalah false

//  b.Jelaskan kenapa deklarasi pada baris 26 menyebabkan error!
//  Jawaban :
//  Karena nama merupakan const atau konstanta sehingga nilainya tak dapat diubah

//  c.Dengan melakukan komen pada baris 26, apakah baris 28 dapat dieksekusi? Jelaskan!
//  Jawaban :
//  Tidak bisa, karena variabel 'asal' dideklarasikan di dalam fungsi perkenalan() jadi tidak bisa diakses diluar fungsi tersebut