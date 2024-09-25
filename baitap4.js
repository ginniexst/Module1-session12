var str = prompt("Mời nhập vào một chuỗi ký tự");
var letter = prompt("Mời nhập vào 1 ký tự");

function countLetter(string, letter) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            count++
        }
    }
    return count;
}

console.log(countLetter(str, letter));