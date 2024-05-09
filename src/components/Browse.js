import React, { useContext } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import { UserContext } from '../utils/context'

const Browse = () => {

  const data = useContext(UserContext)
  console.log(data);

  useNowPlayingMovies()
  useTopRatedMovies()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse