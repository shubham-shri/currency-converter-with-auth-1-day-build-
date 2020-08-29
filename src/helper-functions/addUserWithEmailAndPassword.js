import setUserToken from './setUserToken'
function addUserWithEmailAndPassword(email, password) {
  let userDb = JSON.parse(localStorage.getItem('userDb'))
  if (!userDb) {
    localStorage.setItem('userDb', JSON.stringify({}))
    userDb = {}
  }
  if (userDb[email]) {
    alert('email already registered')
    return
  }
  userDb[email] = password
  localStorage.setItem('userDb', JSON.stringify(userDb))
  setUserToken(true)
}

export default addUserWithEmailAndPassword
