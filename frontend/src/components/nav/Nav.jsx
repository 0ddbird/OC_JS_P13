// Hooks
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// React components
import Logo from '../../assets/argentBankLogo.png'
import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'
import UserButton from './UserButton'

// Features
import { tokenSlice } from '../../features/slices/tokenSlice'
import { profileSlice } from '../../features/slices/profileSlice'
import { accountSlice } from '../../features/slices/accountSlice'
import { deleteLocalToken } from '../../features/api/manageLocalToken'

const Nav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector((state) => state.token.value)
  const profile = useSelector(state => state.profile.value)

  function handleSignOut () {
    dispatch(tokenSlice.actions.deleteToken())
    dispatch(profileSlice.actions.deleteProfile())
    dispatch(accountSlice.actions.deleteDetails())
    deleteLocalToken()
    navigate('../')
  }

  return (
    <nav>
      <NavLink to='/'>
        <img className='nav-logo' src={Logo} alt='ArgentBank logo'></img>
      </NavLink>
      <div>
        {!token && <SignInButton />}
        {token && profile && <UserButton />}
        {token && profile && <SignOutButton handleSignOut={handleSignOut} />}
      </div>
    </nav>
  )
}

export default Nav
