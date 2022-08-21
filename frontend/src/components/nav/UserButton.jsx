// Hooks
import React from 'react'
import { useSelector } from 'react-redux'
// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const UserButton = () => {
  const profile = useSelector((state) => state.profile.value)
  return (
    <NavLink to='/dashboard'>
      <button className="nav-button user-button">
        {<FontAwesomeIcon icon={faCircleUser} />}
        <div>{profile.firstName}</div>
      </button>
    </NavLink>
  )
}

export default UserButton
