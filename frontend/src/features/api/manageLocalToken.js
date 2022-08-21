function storeLocalToken (token) {
  const localStorageTokenPart = token.slice(0, token.length / 2)
  const cookieTokenPart = token.split(localStorageTokenPart)[1]
  console.log('Token: ', token, '\nlocalStorageTokenPart: ', localStorageTokenPart, '\ncookieTokenPart', cookieTokenPart)
  window.localStorage.setItem('argentBankToken', localStorageTokenPart)
  document.cookie = ('argentBankToken', cookieTokenPart)
}

function deleteLocalToken () {
  window.localStorage.removeItem('argentBankToken')
  document.cookie = ''
}

export { storeLocalToken, deleteLocalToken }
