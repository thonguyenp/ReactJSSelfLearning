//Toán tử ... => dùng để copy các object

const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];

const thirdArr = [...firstArr, ...secondArr];
//Với toán tử ... thì thứ tự trước sau quan trọng
const fourthArr = [...secondArr, ...firstArr];
// console.log(thirdArr, fourthArr);

let myArr = ["Tho", "hehe", "React"];
// myArr.push("new Item"); //đưa vào cuối mảng
// myArr = [...myArr, "new Item"]; //tác dụng hệt như trên

// myArr.unshift('New item');
myArr = ["New item", ...myArr];


// console.log(myArr);

const test = {name: "tho", address: "984 duong 23/10"};
console.log({...test});

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
};

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow'
};
//ghi đè nội dung của updateMyVehicle lên myVehicle
const update = {...myVehicle, ...updateMyVehicle};

// console.log(update);

// const state = {
//     name: "tho",
//     age: 21,
//     address: "Nha Trang"
// };

// const update2 = {
//     ...state,
//     age: 25
// };

// console.log(update2);

//exercise
function sum (a, b, c)
{
    return a + b + c;
}

const numbers = [1, 11, 2, 3];

console.log(sum(...numbers));   //chỉ tính tổng 3 số đầu trongmảng