// React, React router DOM
import React, { useState } from 'react'
import AccountsOverview from '../components/AccountsOverview'
import Footer from '../components/Footer'
import Nav from '../components/nav/Nav'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { profileSlice } from '../features/slices/profileSlice'

// API
import { updateProfile } from '../features/api/apiCalls'

const Dashboard = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token.value) // can be undefined or string
  const profile = useSelector(state => state.profile.value) // can be undefined or string
  const [editOn, setEditOn] = useState(false)
  const [editedFirstName, setFirstName] = useState(profile.firstName) // can be undefinde or string
  const [editedLastName, setLastName] = useState(profile.lastName) // can be undefined or string
  const editedUserNames = { firstName: editedFirstName, lastName: editedLastName } // can be an object with undefined values or string values

  function handleEdit () {
    setEditOn(true)
  }

  function handleEditCancel () {
    setEditOn(false)
  }

  async function handleEditSubmit (e) {
    e.preventDefault()

    const getUpdateResponse = await updateProfile(token, editedUserNames)

    if (getUpdateResponse.status === 200) {
      const updatedProfile = {
        email: profile.email,
        firstName: editedFirstName,
        lastName: editedLastName,
        createdAt: profile.createdAt,
        updatedAt: `${Date.now()}`,
        id: profile.id
      }
      dispatch(profileSlice.actions.saveProfile(updatedProfile))
      setEditOn(false)
    } else {
      console.error("ERR : Couldn't edit name")
    }
  }
  return (
      <>
        {<Nav />}
        <main className="bg-dark">
          <header className='dashboard-header'>
          {!editOn && <h1 className='dashboard-header_h1'>Welcome back {`${profile.firstName}`} <br/> {`${profile.lastName}`}</h1>}
          {!editOn && <button className='dashboard-header_edit-button' onClick={handleEdit}>Edit Name</button>}
          {editOn && <input type='text' className='profile-input' defaultValue={editedFirstName} onChange={(e) => setFirstName(e.target.value)}></input>}
          {editOn && <input type='text' className='profile-input' defaultValue={editedLastName} onChange={(e) => setLastName(e.target.value)}></input>}
          {editOn && <button className='profile-save' onClick={(e) => handleEditSubmit(e)}>Save</button>}
          {editOn && <button className='profile-cancel' onClick={handleEditCancel}>Cancel</button>}
          </header>
          {<AccountsOverview id={profile.id}/>}
        </main>
        {<Footer />}
      </>
  )
}

export default Dashboard
