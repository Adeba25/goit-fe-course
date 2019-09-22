let input;
let total = 0;

do {
    input = prompt(`Введите число:`);

    if (input != null) {
        total += parseFloat(input);
    }
} while (input != null);

alert(total);
