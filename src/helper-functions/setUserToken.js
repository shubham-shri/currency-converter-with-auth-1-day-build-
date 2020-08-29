function setUserToken(status) {
  localStorage.setItem('token', JSON.stringify(status))
}
export default setUserToken
