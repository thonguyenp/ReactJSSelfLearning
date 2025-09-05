const s1 = "Hello world";

const s2 = 'Hello world';

const s3 = `Hello world`;

// console.log(s1,s2,s3);   //3 chuỗi nằm trên cùng 1 dòng

//dấu back-ticks giúp điền như nào thì render trên body y hệt
// console.log(`str1
//     str2`); 

let a = 5;
let b = 10;

console.log(`Fifteen is ${a+b} and 
not ${2 * a + b}`); //dùng ${} khi để tính toán biến khi trong template string

//exercise
const base_url = "localhost:8080";
const api = "get-user"; fetch_page = 2;

const result = `${base_url}/${api}?page=${fetch_page}`;

console.log(result);




const premierLeague = [
  { club: 'MC', score: 100 },
  { club: 'Liverpool', score: 98 },
  { club: 'Chelsea', score: 88 },
  { club: 'MU', score: 69 }
];

let count = premierLeague.length;

// Make some strings to include in our output.
let tableHeader = 
`<table>
    <tr>
        <th>Club</th>
        <th>Score</th>
    </tr>
`;
let tableContent = "";

// Loop through the JSON and output each row in to a string.
for (i = 0; i < count; i++) {
  tableContent += 
    `<tr>
        <td> ${premierLeague[i].club}</td>
        <td> ${premierLeague[i].score}</td>
    </tr>`;
}

let tableFooter = "</table>";
// Get div and output the HTML. You can include these HTML strings straight in to your emailText variable.
document.getElementById("tableTest").innerHTML = tableHeader + tableContent + tableFooter;
