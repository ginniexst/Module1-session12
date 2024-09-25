arr = ["abc", "experience", "lalalalalal", "a", "lovely"];

var lgth = 0;
var longest;

function arrLongest(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > lgth) {
            lgth = array[i].length;
            longest = array[i];
        }
    }
    return longest;
}

console.log(arrLongest(arr));