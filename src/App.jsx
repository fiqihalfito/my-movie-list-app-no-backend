import { useState, useEffect } from 'react'
import Box from './components/Box'
import ListContainer from './components/ListContainer'
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'
import { getMovies } from './services/api'
import { v4 as uuidv4 } from 'uuid'
import Star from './assets/icons/Star'


function App() {
  const [movies, setMovies] = useState([])

  const deleteList = (movieId) => {
    const newData = movies.filter(item => item.id !== movieId)
    setMovies(newData)
  }

  const addList = (movieData) => {
    const id = uuidv4()
    setMovies(movies => (
      [
        ...movies,
        { id, ...movieData }
      ]
    ))
    console.log(movies)
  }

  const editList = (movieId, newData) => {
    const movieIndex = movies.findIndex(({ id }) => id === movieId)
    const updatedMovies = movies.slice()
    updatedMovies.splice(movieIndex, 1, { ...updatedMovies[movieIndex], ...newData })
    setMovies(updatedMovies)
  }

  useEffect(() => {
    const data = getMovies()
    setMovies(data)
  }, [])


  return (
    <h1 className="h-screen w-screen bg-slate-200 flex justify-center items-center font-poppins">
      <Box>
        <ListHeader addList={addList} />
        <ListContainer>
          {
            movies?.map((movie, i) => (
              <ListItem key={i} movie={movie} deleteList={deleteList} editList={editList} />
            ))
          }
        </ListContainer>
      </Box>

    </h1>
  )
}

export default App
