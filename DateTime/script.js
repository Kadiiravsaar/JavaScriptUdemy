let simdi = new Date();

/// get methods
// sonuc = simdi;
// sonuc = simdi.getDate(); // gün bilgisi

// sonuc = simdi.getDay(); // hangi gün olduğunu söyler 6 => cumartesi 0 => pazar

// sonuc = simdi.getFullYear(); // yıl bilgisi

// sonuc = simdi.getHours(); // saat bilgisi

// sonuc = simdi.getTime(); // şuan ki saat bilgisi milisecond olarak

// // set methods => tarih değiştirme güncelleme

// simdi.setFullYear(2023) // 2025 olaraş değişti
// //simdi.setMonth(7) // 0 : Ocak

// sonuc = simdi;


let dogumTarihi = new Date(2000,3,21);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

console.log(sonuc);

