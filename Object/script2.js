let siparis_1 = {
    "Siparis_Id":101,
    "Siparis_Tarihi":"26.09.2023",
    "Odeme_Sekli":"Kart",
    "Kargo_adresi":{
        "Mahalle":"Karadeniz",
        "Il":"Ist",
        "Ilce":"Gop"
    },
    "Urunler":[
        {
            "UrunId":4,
            "UrunAdi":"Iphone 14pro",
            "Url":"httpsIphone14",
            "UrunFiyat": 22000
        },
        {
            "UrunId":5,
            "UrunAdi":"Iphone 15pro",
            "Url":"httpsIphone15",
            "UrunFiyat": 32000
        }
    ]
};


let siparis_2 = {
    "Siparis_Id":101,
    "Siparis_Tarihi":"26.09.2023",
    "Odeme_Sekli":"Kart",
    "Kargo_adresi":{
        "Mahalle":"Karadeniz",
        "Il":"Ist",
        "Ilce":"Gop"
    },
    "Urunler":[
        {
            "UrunId":5,
            "UrunAdi":"Iphone 15pro",
            "Url":"httpsIphone15",
            "UrunFiyat": 32000
        }
    ]
};

let siparisler = [siparis_1,siparis_2];

let siparis1_toplam = (siparis_1.Urunler[0].UrunFiyat+siparis_1.Urunler[1].UrunFiyat)*1.18;
let siparis2_toplam = (siparis_2.Urunler[0].UrunFiyat)*1.18;

let toplam_siparisUcreti = siparis1_toplam+siparis2_toplam;

console.log("Sipariş 1:", siparis1_toplam);
console.log("Sipariş 2:", siparis2_toplam);



console.log("Toplam ödenen:",toplam_siparisUcreti);