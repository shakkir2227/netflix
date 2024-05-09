import React, { useContext, useEffect } from 'react'
import { UserContext } from '../utils/context'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'

const Browse = () => {

  const getNowPlayingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', process.env.REACT_APP_TMDB_API_KEY)
    const data = await response.json()
    console.log(data);
  }

  useEffect(() => {
    getNowPlayingMovies()
  }, [])

  const userContext = useContext(UserContext)

  return (
    <div>

      <Header />
    </div>
  )
}

export default Browse