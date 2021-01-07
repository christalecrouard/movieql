export const people = [
    {
        id: 1,
        name: "Gwladis",
        age: 20,
        gender: "female"
    },
    {
        id: 2,
        name: "Jean",
        age: 15,
        gender: "male"
    },
    {
        id: 3,
        name: "Hope",
        age: 21,
        gender: "female"
    },
    {
        id: 4,
        name: "Seb",
        age: 56,
        gender: "male"
    },
    {
        id: 5,
        name: "Andrea",
        age: 55,
        gender: "male"
    },
    {
        id: 6,
        name: "Joséphine",
        age: 98,
        gender: "female"
    },
    {
        id: 7,
        name: "Hugues",
        age:46,
        gender: "female"
    },
    {
        id: 8,
        name: "Espé",
        age: 31,
        gender: "male"
    },
    {
        id: 9,
        name: "Sophie",
        age: 73,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0]
}