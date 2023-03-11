import { movies } from "../data"
// import { v4 as uuidv4 } from 'uuid'

export const getMovies = () => {
    return movies
}

// export const addMovie = (movie) => {
//     const id = uuidv4()
//     movies.push({ id, ...movie })
// }

// export const editMovie = (movieData, movieId) => {
//     const movieIndex = movies.findIndex(({ id }) => id === movieId)
//     movies[movieIndex] = { ...movies[movieIndex], movieData }
// }

// export const deleteMovie = (movieId) => {
//     const movieIndex = movies.findIndex(({ id }) => id === movieId)
//     movies.splice(movieIndex, 1)
//     console.log('deleting', movies);
// }