// Khai báo mảng
const stringArray = [
    "This is my cat",
    "JavaScript is fun",
    "I am learning JavaScript",
    "My cat doesn't like JavaScript"
]

// Hàm tìm kiếm chuỗi trong mảng
function findString(array, searchString) {
    return array.filter(item => item.includes(searchString));
}

// Yêu cầu người dùng nhập chuỗi
let inputStr = prompt("Mời nhập vào chuỗi cần tìm");

// Gọi hàm và lấy kết quả
let result = findString(stringArray, inputStr);

// In ra màn hình
if (result.lenght > 0) {
    console.log(result);
} else {
    console.log("Không có phần tử chứa chuỗi cần tìm");
}
