let user = {};

// console.log(user.address);
// console.log(user.address ? user.address.street : undefined);    //không còn lỗi

console.log(user?.address?.street);
//Nếu chạy hết cái bên trái mà undefined thì in ra dòng bên phải dấu ??
console.log(user?.address?.street ?? `not found user`);


let userAdmin = {
  admin() {
    // alert("I am Eric");
  }
};

let userGuest = {};

userAdmin.admin();
userGuest?.admin?.(); //check userGuest có tồn tại hay không => check func admin() có tồn tại hay không

//summary
//thao tác với object

//obj?.a?.b?.c //undefined
//obj?.a?.b?.c ?? `not found`

// Thao tác với func
// obj.func?.() 

let obj = {
    name: 'Tho',
    address: {
        street: 'duong 23/10',
        province: 'Nha Trang'
    }
};

console.log(obj.address);