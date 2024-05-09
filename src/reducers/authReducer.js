const authReducer = (currentState, action) => {
    console.log(action.type);
    console.log(action.topRatedMovies);
    switch (action.type) {
        case "login": return ({
            ...currentState,
            uid: action.uid,
            displayName: action.displayName,
            email: action.email,
        })

        case "logout": return ({
            ...currentState,
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