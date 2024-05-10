const authReducer = (currentState, action) => {
    
    switch (action.type) {
        case "login": return ({
            ...currentState,
            uid: action.uid,
            displayName: action.displayName,
            email: action.email,
        })

        case "update": return ({
            ...currentState,
            displayName: action.displayName,
        })

        case "logout": return ({
            ...currentState,
            uid: "",
            name: "",
            email: "",
        })

        case "addNowPlayingMovies": return ({
            ...currentState,
            movies: action.movies
        })

        case "addTopRatedMovies": return ({
            ...currentState,
            topRatedmovies: action.topRatedMovies
        })
    }
}

export default authReducer