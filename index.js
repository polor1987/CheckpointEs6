const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];

// function getAge(pet) {
//     return new Date().getFullYear() - pet.bornOn;
// }

//var petsWithAge = []
// for (var i = 0; i < pets.length; i++) {
//     var pet = pets[i];
//     pet.age = getAge(pet);

//     petsWithAge.push(pet);
// }

const petsWithAge = pets.map((pet, i) => {
    pet = pets[i]
    pet.age = new Date().getFullYear() - pets[i].bornOn
    return pet
})

console.log(petsWithAge);

// let dogs = [];
// for (let i = 0; i < pets.length; i++) {
//     var pet = pets[i];
//     if (pet.type === "dog") {
//         dogs.push(pet);
//     }
// }

let dogs = pets.filter((ele, i) => {
    ele = "dog"
    return pets[i].type === ele
});

console.log(dogs);

// var jasper;
// for (var i = 0; i < pets.length; i++) {
//     var pet = pets[i];
//     if (pet.name === "Jasper") {
//         jasper = pet;
//     }
// }
const jasper = pets.find((jas, i) => {
    jas = "Jasper"
    return pets[i].name === jas
})


console.log(`Jasper is ${jasper.age} years old`);