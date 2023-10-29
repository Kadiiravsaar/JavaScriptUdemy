// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonk.
function kelimeYazdir(kelime,adet){
    for(let i = 0; i<adet ;i++){
        console.log(kelime);
    }
}

kelimeYazdir("Merhaba",2);

// 2- Dikdörtgenin alan ve çevresi hesaplayan fonksiyon

function alanCevreHesapla(kısa,uzun){
    let alan = kısa*uzun;
    let cevre = (kısa+uzun)*2;

    return `alan: ${alan} cevre: ${cevre}`;
}

let sonuc = alanCevreHesapla(2,5);
console.log(sonuc);

// 3- Yazı tura uygulaması fonk kullanarak yazınız

function yaziTura(){
    let random = Math.floor(Math.random() * 2);// 0-1
    if(random<1)
        console.log("Yazı");
    else
        console.log("Tura");
    console.log(random);

}
yaziTura();

// 4- kendisine gönderilen bir sayının tam bölenlerini bir dizi şeklinde döndüren fonksiyon

function tamBolenler(sayi){
    let sayilar = [];

    for (let i = 2; i < sayi; i++) {
        if(sayi%i == 0)
        {
            sayilar.push(i);
        };
    };
   
    return sayilar;
}

console.log(tamBolenler(220));