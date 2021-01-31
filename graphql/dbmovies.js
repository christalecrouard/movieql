let movies1 = [
    {
        id: 1,
        name: "Black Swan",
        score: 85,
    },
    {
        id: 2,
        name: "Les Tuche",
        score: 47
    },
    {
        id: 3,
        name: "Avengers - Infinty War",
        score: 85 
    },
    {
        id: 4,
        name: "Black is King",
        score: 95
    },
    {
        id: 5,
        name: "Mulan",
        score: 73
    },
    {
        id: 6,
        name: "In Wonder",
        score: 50
    },
    {
        id: 7,
        name: "Coco",
        score:97
    },
    {
        id: 8,
        name: "Lucy",
        score: 66
    },
    {
        id: 9,
        name: "Django",
        score: 87
    }
];

export const getMovies1 = () => movies1;

export const getMById = id => {
    const filteredMovies = movies1.filter(movie1 => movie1.id === id);
    return filteredMovies[0]
}

export const deleteMovie = id => {
    const cleanedMovies = movies1.filter(movie1 => movie1.id !== id);
    if (movies1.length > cleanedMovies.length){
        movies1 = cleanedMovies;
        return true;
    } else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id : movies.length,
        name,
        score,
    };
    movies.push(newMovie);
    return newMovie;
}