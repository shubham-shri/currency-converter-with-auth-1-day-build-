import MESSAGES from '../MESSAGES'
import ENVIRONMENT_VARS from '../ENVIRONMENT_VARS'

function sendEmail(email, newPassword) {
  const templateId = ENVIRONMENT_VARS.EMAIL_JS_TEMPLATE_ID
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
      alert(MESSAGES.EMAIL_SENT_SUCCESSFULLY)
    })
    .catch((err) => alert(MESSAGES.EMAIL_SENT_FAILED))
}

function generateRandomPassword() {
  return Math.random().toString(36).substring(7)
}
function forgotPassword(email) {
  let userDb = JSON.parse(localStorage.getItem('userDb'))
  let newPassword = generateRandomPassword()
  if (!userDb || !userDb[email]) {
    alert(MESSAGES.FORGOT_PASSWORD_EMAIL_NOT_FOUND)
    return
  }

  userDb[email] = newPassword
  localStorage.setItem('userDb', JSON.stringify(userDb))
  // send new password in email
  sendEmail(email, newPassword)
}

export default forgotPassword
