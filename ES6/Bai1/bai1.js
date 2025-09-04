// alert('me');

var name = "Hoi Dan IT";

var age = 25; //kieu du lieu so, tam vuc: global

console.log("Check info: ", name, age);

function test ()
{
    var x = 10; //khong nen dung var
    if (x === 10)
    {
        let y = 5;  //gia tri bien y chi dung trong x
    }
    console.log("Check info: ", name, age); 
}


// test();

const z  = 15;  
const test = 20; //khong duoc gan lai hang so
console.log("Check info: ", z); 
