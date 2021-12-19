interface User {
    firstName: string;
    lastName: string;
    age: number;
    booksId: Array<number>
}

const user: User = {
    firstName: "aditya",
    lastName: "panther",
    age: 55,
    booksId: [1, 2, 3],
}

console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.booksId[0]);




