import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidata } from '../utils/validate'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const email = useRef(null)
    const name = useRef(null)
    const password = useRef(null)

    function toggleSignInForm() {
        setIsSignInForm(!isSignInForm)
    }
    function handleButtonClick() {
        // clear the old error message
        setErrorMessage(null)
        // validate form data
        const message = checkValidata(email.current.value, name?.current?.value, password.current.value)
        setErrorMessage(message)
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg"
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
