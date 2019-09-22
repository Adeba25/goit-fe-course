const credits = 23580;
let pricePerDroid = 3000;

let droidsToBuy = prompt(`Сколько дроидов хотите купить?`);

if (droidsToBuy === null) {
    console.log(`Отменено пользователем!`);
    }   

let totalPrice = droidsToBuy * pricePerDroid;

if (totalPrice > credits) {
    console.log(`Недостаточно средств на счету!`);
    } else console.log(`Вы купили ${droidsToBuy} дроидов, на счету осталось ${credits-totalPrice} кредитов.`);

        
    