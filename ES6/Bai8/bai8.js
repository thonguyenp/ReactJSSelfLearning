// const person = { name: 'Eric', age: 26, eyeColor: 'black', like: 'girl' };
// const name = person.name;
// const age = person.age;
// console.log(name); // Eric
// console.log(age);  // 26

const person = { name: 'Eric', age: 26, eyeColor: 'black', like: 'girl' };
const { name, age } = person;
// const age = person.age; const name = person.name

// console.log(name); // Eric
// console.log(age);  // 26

const city = ['ha noi', 'da nang', 'sai gon', 'ca mau'];
// old way
const hanoi = city[0];
const danang = city[1];
const hcm = city[2];

// With destructuring:
const [ x, y, ,z ] = city;  //ko có đối tượng thứ 2 thì tự nhận phần tử thứ 3

// console.log(danang, hanoi, hcm);
// console.log(x, y, z);

//exercise
const react = ['facebook', 'all-in-one', 'js'];
const [a, b, c] = react; 
console.log(a,b,c);
const dev = {salary: 2000, tool: 'laptop', like: 'bugs'};
const {like} = dev;
console.log(like);
