import setUserToken from './setUserToken'
function loginWithEmailAndPassword(email, password) {
  let userDb = JSON.parse(localStorage.getItem('userDb'))
  if (!userDb || !userDb[email]) {
    alert('Email not registered, sign up instead')
    return false
  } else {
    if (userDb[email] !== password) {
      alert('Incorrect Password')
      return false
    }
    setUserToken(true)
    return true
  }
}

export default loginWithEmailAndPassword
