import setUserToken from './setUserToken'
import MESSAGES from '../MESSAGES'
function addUserWithEmailAndPassword(email, password) {
  let userDb = JSON.parse(localStorage.getItem('userDb'))
  if (!userDb) {
    localStorage.setItem('userDb', JSON.stringify({}))
    userDb = {}
  }
  if (userDb[email]) {
    alert(MESSAGES.EMAIL_ALREADY_REGISTERED)
    return
  }
  userDb[email] = password
  localStorage.setItem('userDb', JSON.stringify(userDb))
  setUserToken(true)
}

export default addUserWithEmailAndPassword
