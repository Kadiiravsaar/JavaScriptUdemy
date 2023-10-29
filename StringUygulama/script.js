let url = "KadirAvsarJavaScriptileılgileniyor";
let kursAdi = "Javascript dersleri";

// 1 url kaç karakterli

let sonuc;
sonuc = url.length;

// 2 kuradi kaç kelime

sonuc = kursAdi.split(" ").length;


// 3  url https ile mi başlıyor

sonuc = url.startsWith("https");

// 4 kursadi içerisinde eğitim kelimesi var mı

if(kursAdi.indexOf("eğitim")>-1)
{
    console.log("evet var");
}
else{
    console.log("yok")
}

// 6 url ve kurs adi değişkenleri kullanarak aşığadki string bilgiyi oluşturun
// KadirAvsarJavaScriptileılgileniyor/Javascript-dersleri

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "-");

sonuc = `${url}/${kursAdi}`;

console.log(sonuc);