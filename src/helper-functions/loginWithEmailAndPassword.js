import MESSAGES from '../MESSAGES'
import setUserToken from './setUserToken'
function loginWithEmailAndPassword(email, password) {
  let userDb = JSON.parse(localStorage.getItem('userDb'))
  if (!userDb || !userDb[email]) {
    alert(MESSAGES.EMAIL_NOT_REGISTERED)
    return false
  } else {
    if (userDb[email] !== password) {
      alert(MESSAGES.INCORRECT_PASSWORD)
      return false
    }
    setUserToken(true)
    return true
  }
}

export default loginWithEmailAndPassword
