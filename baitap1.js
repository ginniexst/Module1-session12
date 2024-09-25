function isEven(number) {
    if (number == 0) {
        return console.log(`${number} is 0`);
    } else if (number % 2 == 0) {
        return console.log(`${number} is even`);
    } else {
        return console.log(`${number} is odd`);
    }
}

number1 = +prompt("Mời nhập số thứ 1");
number2 = +prompt("Mời nhập số thứ 2");
number3 = +prompt("Mời nhập số thứ 3");

isEven(number1);
isEven(number2);
isEven(number3);