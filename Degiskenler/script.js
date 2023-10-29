
/* 
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        öğrenci 1: 
            isim                : ada bilgi
            doğum tarihi        : 2012
            matematik notları   : 70, 70, 80

        öğrenci 2: 
            isim                : yiğit bilgi
            doğum tarihi        : 2010
            matematik notları   : 40, 40, 50

    2- Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerinin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

let gecernot =50;
let suankiyil = new Date().getFullYear(); // şuan ki yıl bilgisi gelir. getFullYear Sadece yıl bilgisi

let ogr1ad = "Ada";
let ogr1soyad = "Bilgi";
let ogr1dogumyil = 2012;
let yas = suankiyil-ogr1dogumyil;

let ogr1Mat1Not = 70;
let ogr1Mat2Not = 70;
let ogr1Mat3Not = 80;
let ogr1not_ortalama = (ogr1Mat1Not+ogr1Mat2Not+ogr1Mat3Not)/3;

console.log(ogr1not_ortalama>=50);


let ogr2ad = "Yiğit";
let ogr2soyad = "Bilgi";
let ogr2dogumyil = 2010;
let yas2 = suankiyil-ogr2dogumyil;


let ogr2Mat1Not = 40;
let ogr2Mat2Not = 40;
let ogr2Mat3Not = 50;
let ogr2not_ortalama = (ogr2Mat1Not+ogr2Mat2Not+ogr2Mat3Not)/3;
console.log(parseFloat(ogr2not_ortalama));


console.log(yas, ogr1ad);

console.log(yas2,ogr2ad);
