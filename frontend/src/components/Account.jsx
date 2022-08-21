// Hooks
import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Account = ({ accountId, accountTitle, accountBalance, accountDescription }) => {
  Account.propTypes = {
    accountId: PropTypes.number,
    accountTitle: PropTypes.string,
    accountBalance: PropTypes.string,
    accountDescription: PropTypes.string

  }
  return (
    <section className='account'>
      <div className='account__details'>
        <span className='account__details__title'>{accountTitle}</span>
        <span className='account__details__amount'>{accountBalance}</span>
        <span className='account__details__type'>{accountDescription}</span>
      </div>
      <NavLink to={`/account/${accountId}`} className='account__view-button cta'>
        <button className='view-transaction-button'>View transactions</button>
      </NavLink>
    </section>
  )
}

export default Account
