import { useState } from 'react'
import NavBar from './_Navbar'
import Footer from './_Footer'
import './_Login.css'

const Login = () => {
  const [StatusMsg, SetStatus] = useState('')
  const [Email, SetEmail] = useState('')
  const [Password, SetPassword] = useState('')
  let url = ''

  const Checkuser = (e) => {
    let EmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    e.preventDefault()
    if (Email !== '' && Password !== '') {
      if (Email.match(EmailRegex)) {
        SetStatus('')
      } else {
        SetStatus('Invalid Email Input')
      }
    } else {
      SetStatus('Invalid Inputs')
    }
  }

  return (
    <div className="login_wrapper">
      <NavBar />
      <div className="login_container">
        <h1>Sign in</h1>
        <form className="form">
          <div className="form_input">
            <p>Email Address</p>
            <input
              onChange={(e) => {
                SetEmail(e.target.value)
              }}
              type="email"
              name="email"
            />
          </div>
          <div className="form_input">
            <p>Password</p>
            <input
              onChange={(e) => {
                SetPassword(e.target.value)
              }}
              type="text"
              name="password"
            />
          </div>
          <div className="error_message">
            <p>{StatusMsg}</p>
          </div>
          <div className="form_btn">
            <button onClick={Checkuser}>Submit</button>
          </div>
          <div className="form-forgot-link">
            <a href={url}>Forgot username?</a>
            <a href={url}>Forgot Password?</a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}
export default Login
