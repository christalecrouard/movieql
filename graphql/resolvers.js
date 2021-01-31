import {getById, people} from "./db"
import {getMovies1, getMById, addMovie, deleteMovie} from "./dbmovies"
import {getMovie, getMovies, getParentalGuides, getSuggestions} from "./dbyts"

const resolvers = {
    Query: {
        people: () => people,
        person: (_,{id}) => getById(id),

        movies1: () => getMovies1(),
        movie1: (_,{id}) => getMById(id),

        movies: (_,{limit, rating}) => getMovies(limit, rating),
        movie: (_, {id}) => getMovie(id),
        suggestions: (_, {id}) => getSuggestions(id),
        guides: (_,{id}) => getParentalGuides(id),
    },

    Mutation: {
        addMovie: (_,{name, score}) => addMovie(name, score),
        deleteMovie:  (_,{id}) => deleteMovie(id)
    }
};

export default resolvers;