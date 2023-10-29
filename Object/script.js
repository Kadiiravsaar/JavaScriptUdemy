let user = {
    "Name":"Kadir",
    "SurName":"Avsar",
    "Age":23,
    "Adress":{
        "City":"Ist"
    },
    "Hobbies":["boks","Kick"]
}

let sonuc;

sonuc = user.Name;
sonuc = user["Age"];
sonuc = user.Adress.City;

sonuc = user.Hobbies[1];

console.log(sonuc);