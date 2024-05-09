const authReducer = (currentState, action) => {
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
    }   
}

export default authReducer