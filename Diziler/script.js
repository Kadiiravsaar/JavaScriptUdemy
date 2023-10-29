// let urunler = ["iphone 12","iphone 13"];
// let fiyat = [10000,12000];

// console.log(urunler[0]);
// console.log(urunler[1]);

// console.log(fiyat[0]);
// console.log(fiyat[1]);

// console.log(`${urunler[0]} - ${fiyat[1]} `);
// console.log(`${urunler[1]} - ${fiyat[1]} `);

let ogrenciler = ["Kadir","Şerif","Memo"];
// array to string
sonuc = ogrenciler.length;

sonuc = ogrenciler.toString();

sonuc = ogrenciler.join(" "); // her eleman arasına boşluk gelerek string dizi olur

// eleman silme
sonuc = ogrenciler.pop(); // son eleman silinir ve geri döndürülür

sonuc = ogrenciler.shift(); // ilk eleman silinir

// eleman ekleme

sonuc = ogrenciler.push("Keke"); // sona eleman ekler

sonuc = ogrenciler.unshift("Muzo"); // başa eleman ekler


let marka1 = ["opel","bmw"];
let marka2 = ["astra","d200"];

// sonuc = marka1.concat(marka2); // dizi birleştirme

 // splice araştır
sonuc = marka1.splice(0,0,"audi","keks"); // dizi birleştirme







console.log(sonuc);
