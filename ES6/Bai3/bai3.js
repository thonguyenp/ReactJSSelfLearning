let person = {name: "Tho", age: 21};    //kieu du lieu mang

let person2 = {
    name: "Tho", 
    age: 21,
    eyeColor: "black",
    "My address": "984 duong 23/10"
};    //xuống hàng cho tường minh

// console.log("Check var: ", person2);

const nguoi = ["Tho", "Nguyen", 21];

// console.log("Check first name: ", person2.name);
// console.log("Check first name: ", person2["name"]); //truy cap 1 thuoc tinh chua biet truoc
console.log("Check name", nguoi[0]);

//exercise 
let React = {
    language: "javascript",
    author: "facebook"
};

alert(React.language);