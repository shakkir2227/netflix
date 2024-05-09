import React, { useContext } from 'react'
import { UserContext } from '../utils/context'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const { movies } = useContext(UserContext);
    if (!movies) return

    const mainMovie = movies.results[0]
    const { original_title, overview, id } = mainMovie;
    return (
        <div>
            <VideoTitle title = {original_title} overview = {overview} />
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer



