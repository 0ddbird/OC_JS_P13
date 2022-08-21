// React
import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/nav/Nav'
import { useSelector } from 'react-redux'
import TransactionsBoard from '../components/TransactionsBoard'
import { useParams } from 'react-router-dom'

const AccountTransactions = () => {
  const { id } = useParams()
  const userAccounts = useSelector(state => state.account.value)
  const accountDetails = userAccounts.find(object => object.accountId === parseInt(id))

  return (
    <>
      {<Nav />}
      <div className="account-transactions">
        <div className="account-transactions__header bg-dark">
          <h1 className="account-transactions__header__account-title">{accountDetails.accountTitle}</h1>
          <span className="account-transactions__header__account-balance">{accountDetails.accountBalance}</span>
          <span>Available Balance</span>
        </div>
        {<TransactionsBoard accountTransactions={accountDetails.accountTransactions}/>}
      </div>
      {<Footer />}
    </>
  )
}

export default AccountTransactions
