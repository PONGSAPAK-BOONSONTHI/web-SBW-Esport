import React, { useEffect, useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script'
import './LoginLogout.css'


const LoginLogout = () => {
  const [count, setCount] = useState(0)
  const [profile, setProfile] = useState(null)

  const clientId = '981964571180-66p0p3cp7sdq6tif5aiam4j2589qt2no.apps.googleusercontent.com'

  useEffect(() => {
    const initclient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }
    gapi.load("client:auth2", initclient)
  }, [])

  const onSuccess = (res) => {
    setProfile(res.profileObj)
    console.log("success", res)
  }

  const onFailed = (res) => {
    console.log("failed", res)
  }

  const logOut = () => {
    setProfile(null);
  }

  return (
    <header>
      <div class="topnav">
        <div class="login-container">
          <div>
            <a class="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          {profile ? (
            <div className='profile'>
              <img src={profile.imageUrl} alt="profile" />
              <GoogleLogout
                clientId={clientId}
                buttonText="Log out"
                onLogoutSuccess={logOut}
              />
            </div>
          ) : (
            <div className='profile'>
              <GoogleLogin
                clientId={clientId}
                buttonText="sign in with Google"
                onSuccess={onSuccess}
                onFailed={onFailed}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
            </div>
          )}
        </div>
      </div>
      <h3>User Logged in</h3>
      {profile ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
        </div>
      ) : (
        <div>
          <p>Name: ???</p>
          <p>Email: ???</p>
        </div>
      )}
    </header >
  )
}

export default LoginLogout