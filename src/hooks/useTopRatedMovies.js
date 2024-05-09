import { useContext, useEffect } from "react"
import { UserContext } from "../utils/context"
import { API_TMDB } from "../utils/constants"

function useTopRatedMovies() {
    const userContext = useContext(UserContext)

    const getTopRatedMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_TMDB)
        const topRatedMovies = await response.json()
        userContext.dispatch({ type: "addTopRatedMovies", topRatedMovies })
    }

    useEffect(() => {
        getTopRatedMovies()
    }, [])
}

export default useTopRatedMovies
