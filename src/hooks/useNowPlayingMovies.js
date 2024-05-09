import { useContext, useEffect } from "react"
import { UserContext } from "../utils/context"
import { API_TMDB } from "../utils/constants"

function useNowPlayingMovies() {
    const userContext = useContext(UserContext)
    console.log(userContext.movies);

    const getNowPlayingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_TMDB)
        const movies = await response.json()
        userContext.dispatch({ type: "addNowPlayingMovies", movies })
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies