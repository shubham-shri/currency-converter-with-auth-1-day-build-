function sendEmail(email, newPassword) {
  const templateId = 'template_U0GXhW7Z'
  console.log(email)
  sendFeedback(templateId, {
    message_html: `Your password has been changed as per your request. Your new password is ${newPassword}. Please use this password to login to the application`,
    from_name: `Currency Converter Team`,
    to_name: `Currency Converter User`,
    to_email: email,
    form_email: 'currency-converter@noreply.com',
  })
}
const sendFeedback = (templateId, variables) => {
  window.emailjs
    .send('gmail', templateId, variables)
    .then((res) => {
      alert(
        'New Password has been sent successfully to your email, Sign in with the new password',
      )
    })
    .catch((err) =>
      alert('Error occurred while sending new password, Please try again'),
    )
}

function generateRandomPassword() {
  return Math.random().toString(36).substring(7)
}
function forgotPassword(email) {
  let userDb = JSON.parse(localStorage.getItem('userDb'))
  let newPassword = generateRandomPassword()
  if (!userDb || !userDb[email]) {
    alert('Email not found, sign up instead')
    return
  }

  userDb[email] = newPassword
  localStorage.setItem('userDb', JSON.stringify(userDb))
  // send new password in email
  sendEmail(email, newPassword)
}

export default forgotPassword
