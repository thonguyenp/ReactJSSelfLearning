// Bên trong map() và filter () đều là 1 func 

const myArr = [1,2,3,4];

// const myList = myArr.map((item) => item * 2);  //jsx 
//map () tao 1 arr mới từ arr ban đầu

//Bên trong hàm map() là 1 func
//const  a = () => {};
const myList = myArr.map((item, index) => 
{
    // console.log(item, index);
    return item * 2;
});

//Viết theo kiểu tạo thêm 1 arr mới
const newArr = []
for (let i = 0; i < myArr.length; i++)
{
    let item = myArr[i] * 2;
    newArr.push(item);
}

// console.log(myList,newArr);

//Filter làm giảm số lượng phần tử ban đầu theo 1 tiêu chí
const ages = [32, 33, 16, 40];

// const result = ages.filter(chkAdult);
// function chkAdult (age)
// {
//     return age >= 18;
// }

const result = ages.filter((age) => {
    return age >= 18;
});

console.log(result);