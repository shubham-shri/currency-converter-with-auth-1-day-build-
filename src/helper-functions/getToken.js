function getUserToken(email) {
  return JSON.parse(localStorage.getItem('token'))
}
export default getUserToken
