import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useContext, useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../utils/context';
import { LOGO, USER_ICON } from '../utils/constants';


const Header = () => {

  const userContext = useContext(UserContext)

  const navigate = useNavigate()

  function handleSignOut() {
    signOut(auth).then(() => {
      // Sign-out successful.
      userContext.dispatch({ type: "logout" })
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user
        userContext.dispatch({ type: "login", uid, email })
        navigate("/browse")
        // User is signed in      
      } else {
        navigate("/")
      }
    });
  }, [])



  return (
    <div className='absolute md:w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between flex-col md:flex-row'>
      <img className='md:w-44 w-9 mx-auto md:mx-0' src={LOGO}
        alt='logo' ></img>

      {
        userContext.email &&
        <div className="flex p-2">
          <img className='w-12 h-12 mx-3 my-2' src={USER_ICON} alt='usericon' ></img>
          <button onClick={handleSignOut} className='font-bold text-white' >Sign out</button>
        </div>
      }
    </div>
  )
}

export default Header
