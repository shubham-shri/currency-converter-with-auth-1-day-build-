function logout() {
  localStorage.setItem('token', JSON.stringify(false))
}
export default logout
