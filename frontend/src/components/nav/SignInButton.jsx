// Hooks
import React from 'react'
import { NavLink } from 'react-router-dom'
// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const SignInButton = () => {
  return (
    <NavLink to='/login' >
      <button className='nav-button sign-in'>
        {<FontAwesomeIcon icon={faCircleUser} />}
        <div>Sign In</div>
      </button>
    </NavLink>
  )
}

export default SignInButton
