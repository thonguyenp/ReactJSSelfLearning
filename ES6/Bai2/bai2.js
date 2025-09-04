class Person 
{
    constructor (name, address)
    {
        this.name = name;
        this.address = address;
    }
    getAddress ()
    {
        return "I live in " + this.address;
    }

}

//exercise 
class Novel
{
    constructor(title, author)
    {
        this.title = title;
        this.author = author;
    }

    getAuthor ()
    {
        "The author is " + this.author;
    }
}

const test = new Person("Tho", "984 duong 23/10");
const sach1 = new Novel("1984", "George Orwell");
console.log("Check test: ", test);
console.log("Check address: ", test.getAddress());

console.log("Check sach1: ", sach1);
