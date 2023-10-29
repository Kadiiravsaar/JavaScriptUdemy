function yasHesapla(dogumYili){
   return new Date().getFullYear()-dogumYili;
}

yasHesapla(2000);

function emekliligeKacYilKaldi(dogumYili,isim){
    let yas = yasHesapla(dogumYili);

    let kalanSene = 65-yas;
    
    if (kalanSene>0)
    {
        console.log(` ${isim}, emekli olmanıza ${kalanSene} yıl kaldi`);
    }
    else{
        console.log("Zaten emekli oldunuz")
    }
}emekliligeKacYilKaldi(2000,"Kadir")