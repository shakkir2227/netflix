import { useEffect } from "react"
import { API_TMDB } from "../utils/constants"

const useMovieTrailer = (movieId, setTrailerId) => {

    // fetch trailer video
    const getMovieVideos = async (setTrailerId) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_TMDB)
        const data = await response.json()
        let trailer = data.results?.filter((video) => {
            return video.type === "Trailer"
        })
        trailer = trailer.length ? trailer[0] : data.results[0]
        setTrailerId(trailer.key)
    }

    useEffect(() => {
        getMovieVideos(setTrailerId)
    }, [])
}

export default useMovieTrailer