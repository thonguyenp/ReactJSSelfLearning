// alert('me');

var name = "Hoi Dan IT";

var age = 25; //kieu du lieu so, tam vuc: global

console.log("Check info: ", name, age);

function test ()
{
    var x = 10;
    console.log("Check info: ", name, age); 
}

console.log("Check info: ", x); 

// test();