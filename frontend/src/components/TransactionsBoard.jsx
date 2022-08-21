// React
import React from 'react'
import Transaction from './Transaction'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

const TransactionsBoard = ({ accountTransactions }) => {
  TransactionsBoard.propTypes = {
    accountTransactions: PropTypes.array
  }
  // console.log(accountTransactions)

  return (
  <div className='transactions-board'>
  <header className='transactions-board__header'>
    <span className='transactions-board__header__date'>DATE</span>
    <span className='transactions-board__header__description'>DESCRIPTION</span>
    <span className='transactions-board__header__amount'>AMOUNT</span>
    <span className='transactions-board__header__balance'>BALANCE</span>
  </header>
    {
      accountTransactions && accountTransactions.map(transaction => {
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
  )
}

export default TransactionsBoard
