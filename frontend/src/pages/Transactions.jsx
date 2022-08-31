// React
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Transaction from '../components/Transaction'
import { getMockedTransactions } from '../features/api/apiCalls'

const AccountTransactions = () => {
  const { id } = useParams()
  const accountId = parseInt(id)
  const accounts = useSelector(state => state.accounts.value)
  const account = accounts.find(account => account.accountId === accountId)

  const profile = useSelector(state => state.profile.value)
  const userId = profile.id

  const [transactions, setTransactions] = useState('')

  useEffect(() => {
    async function fetchAndStoreTransactions (userId, accountId) {
      const fetchTransactionsResponse = await getMockedTransactions(userId, accountId)
      setTransactions(fetchTransactionsResponse)
    }
    fetchAndStoreTransactions(userId, accountId)
  }, [transactions])

  return (
    <>
      <div className="account-transactions">
        <div className="account-transactions__header bg-dark">
          <h1 className="account-transactions__header__account-title">{account.accountTitle}</h1>
          <span className="account-transactions__header__account-balance">{account.accountBalance}</span>
          <span>Available Balance</span>
        </div>
        <div className='transactions-board'>
        <header className='transactions-board__header'>
          <span className='transactions-board__header__date'>DATE</span>
          <span className='transactions-board__header__description'>DESCRIPTION</span>
          <span className='transactions-board__header__amount'>AMOUNT</span>
          <span className='transactions-board__header__balance'>BALANCE</span>
        </header>
        {
          transactions && transactions.map(transaction => {
            return (
              <Transaction
                key = {uuidv4()}
                id={transaction.id}
                date={transaction.date}
                description={transaction.description}
                amount = {transaction.amount}
                balance = {transaction.balance}
                type= {transaction.type}
                category = {transaction.category}
                notes = {transaction.notes}
              />
            )
          })
      }
        </div>
      </div>
    </>
  )
}

// <TransactionsBoard accountTransactions={accountDetails.accountTransactions}/>

export default AccountTransactions
