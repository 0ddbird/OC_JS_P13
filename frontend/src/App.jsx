// React, React router DOM
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AccountTransactions from './pages/AccountTransactions'
import PropTypes from 'prop-types'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { tokenSlice } from './features/slices/tokenSlice'
import { profileSlice } from './features/slices/profileSlice'
// API
import { getProfile } from './features/api/apiCalls'

function App () {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token.value)
  const profile = useSelector(state => state.profile.value)

  function useAuth () {
    return token && profile
  }

  function ProtectedRoute ({ children }) {
    ProtectedRoute.propTypes = {
      children: PropTypes.function
    }
    const auth = useAuth()
    return auth ? children : <Navigate to='../login'/>
  }

  async function fetchAndStoreProfile (userToken) {
    const getProfileResponse = await getProfile(userToken)
    if (getProfileResponse.status === 200) {
      const profile = getProfileResponse.body
      dispatch(profileSlice.actions.saveProfile(profile))
    }
  }
  async function resumeSession () {
    const localStorageToken = window.localStorage.argentBankToken
    const cookieToken = document.cookie
    const token = localStorageToken + cookieToken
    if (localStorageToken && cookieToken) {
      dispatch(tokenSlice.actions.saveToken(token))
      await fetchAndStoreProfile(token)
    }
  }

  useEffect(() => {
    resumeSession()
  }, [])

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/login' element={<Login />}>
          </Route>
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
          </Route>
          <Route
            path='/account/:id'
            element={
              <ProtectedRoute>
                <AccountTransactions />
              </ProtectedRoute>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
