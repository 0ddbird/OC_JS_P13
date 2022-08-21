// React
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Account from './Account'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { accountSlice } from '../features/slices/accountSlice'

// Features
import { getMockedAccountsData } from '../features/api/apiCalls'
import { v4 as uuidv4 } from 'uuid'

const AccountsOverview = ({ id }) => {
  AccountsOverview.propTypes = {
    id: PropTypes.string
  }
  const dispatch = useDispatch()
  const accountsDetails = useSelector((state) => state.account.value)

  useEffect(() => {
    async function fetchAccountData (id) {
      const fetchAccountsResponse = await getMockedAccountsData(id)
      const fetchedAccountsData = fetchAccountsResponse.accounts
      dispatch(accountSlice.actions.saveDetails(fetchedAccountsData))
    }
    fetchAccountData(id)
  }, [])

  return (
    <>
    {accountsDetails && accountsDetails.map(account => {
      return <Account
              key={uuidv4()}
              accountId={account.accountId}
              accountTitle={account.accountTitle}
              accountBalance={account.accountBalance}
              accountDescription={account.accountDescription}
              />
    })}
    </>
  )
}

export default AccountsOverview
