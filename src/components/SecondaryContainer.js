import React, { useContext } from 'react'
import MovieList from './MovieList'
import { UserContext } from '../utils/context'

const SecondaryContainer = () => {

  const { movies } = useContext(UserContext)
  const { topRatedmovies } = useContext(UserContext)

  return (
    <div className='-mt-5 relative z-20'>
      <MovieList title={"Now playing"} movies={movies?.results} />
      <MovieList title={"Top Rated"} movies={topRatedmovies?.results} />
    </div>
  )
}

export default SecondaryContainer

