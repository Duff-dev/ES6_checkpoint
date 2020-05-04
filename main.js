let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];

const petsWithAge = pets.map(obj=> ({ ...obj, age: new Date().getFullYear() - obj.bornOn }))
console.log(petsWithAge);

const dogs = petsWithAge.filter(item => item.type == "dog")
console.log(dogs)

const jasper = dogs.filter(item => item.name == "Jasper")
let pet = jasper[0];
console.log(`Jasper is ${pet.age} years old`)
