const person = {

    name: "John",

    age: 30,

    city: "Hanoi"

};

 

for (let key in person) {

    console.log(key);

    console.log(person[key]);

}