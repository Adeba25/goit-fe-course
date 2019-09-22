let country = prompt(`Введите Вашу страну:`);

let price;
let trueCountry = true;
let message;

switch (country.toLowerCase()) {
    case `китай`:
        price = 100;    
        break;

    case `чили`:
        price = 250;     
        break;

    case `австралия`:
        price = 170;       
        break;

    case `индия`:
        price = 80;      
        break;

    case `ямайка`:
        price = 120;      
        break;

    default:
        trueCountry = false;
        break;
}

switch (trueCountry) {
    case false:
        message = `В вашей стране доставка не доступна`;
        break;

    default:
        message = `Доставка в ${country} будет стоить ${price} кредитов`
        break;
}

alert(message);
