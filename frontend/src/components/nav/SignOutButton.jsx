// Hooks
import React from 'react'
// Types
import PropTypes from 'prop-types'
// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const SignOutButton = ({ handleSignOut }) => {
  SignOutButton.propTypes = {
    handleSignOut: PropTypes.func
  }

  return (
    <button className="nav-button sign-out" onClick={(e) => handleSignOut(e)}>
      {<FontAwesomeIcon icon={faArrowRightFromBracket} />}
      <div>Sign Out</div>
    </button>
  )
}

export default SignOutButton
