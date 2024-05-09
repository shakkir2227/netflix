import React, { useContext, useEffect, useReducer } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserContext } from '../utils/context'
import authReducer from '../reducers/authReducer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'


const Body = () => {

    const [state, dispatch] = useReducer(authReducer, null)

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])

    return (
        <div>
            <UserContext.Provider value={{ email: state?.email, dispatch, uid: state?.uid, displayName: state?.displayName, movies: state?.movies }}>
                <RouterProvider router={appRouter} />
            </UserContext.Provider>
        </div>
    )
}

export default Body
