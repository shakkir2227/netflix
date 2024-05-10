import React, { useCallback, useContext, useRef, useState } from 'react'
import Header from './Header'
import { checkValidata } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../utils/firebase'
import { UserContext } from '../utils/context'
import { BG_IMG } from '../utils/constants'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const email = useRef(null)
    const name = useRef(null)
    const password = useRef(null)

    const data = useContext(UserContext);

    function toggleSignInForm() {
        setIsSignInForm(!isSignInForm)
    }

   
    function handleButtonClick() {
        // clear the old error message
        setErrorMessage(null)
        // validate form data
        const message = checkValidata(email.current?.value, name.current?.value, password.current?.value)
        setErrorMessage(message)

        // if error is there, return
        if (message) return

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // // Signed up        
                    const user = userCredential.user;
                    const { uid, email } = user;
                    data.dispatch({ type: "login", uid, email })

                    updateProfile(user, {
                        displayName: name.current.value,
                    }).then(() => {
                        const { displayName } = auth.currentUser
                        data.dispatch({ type: "update", displayName })

                    }).catch((error) => {
                        // An error occurred
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(errorCode + "-" + errorMessage)
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)

                    // ..
                });
        } else { //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={BG_IMG}
                    alt='logo'></img>
            </div>
            <form onSubmit={(e) => { e.preventDefault() }} className='w-5/12 absolute p-12 bg-black my-16 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70' >
                <h1 className='font-bold text-xl py-4'>{isSignInForm ? "Sign in" : "Sign Up"}</h1>
                <input
                    type='text' ref={email} placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-500'>
                </input>
                {!isSignInForm && <input
                    type='text' ref={name} placeholder='Name`'
                    className='p-4 my-4 w-full bg-gray-500'>
                </input>}
                <input type='password' ref={password} placeholder='Password'
                    className='p-4 my-4 w-full  bg-gray-500'>
                </input>
                <p className='text-red-600 font-bold text-lg py-2' >{errorMessage}</p>
                <button className='p-4 my-6 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>
                    {isSignInForm ? "Sign in" : "Sign Up"}
                </button>
                <p
                    className='py-2 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? " New to Netflix? Sign up now" : "Already registered? Sign in now"}
                </p>
            </form>
        </div>
    )
}

export default Login
