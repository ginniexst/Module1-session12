var str = "This is a string";
var count = 0;

function strCount(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            count++;
        }
    }
    return count;
}

console.log(strCount(str));