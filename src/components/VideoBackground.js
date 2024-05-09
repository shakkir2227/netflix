import React, { useEffect, useState } from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {

    const [trailerId, setTrailerId] = useState(null);

    useMovieTrailer (movieId, setTrailerId)

    return (
        <div>
            <iframe className='w-screen aspect-video'
                src= {"https://www.youtube.com/embed/" + trailerId+ "?&autoplay=1&mute=1" }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>

        </div>
    )
}

export default VideoBackground
