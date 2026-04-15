import React, { useState } from 'react'
import './SignUp.css'

function SignUp({ onClose }) {
  const [mobile, setMobile] = useState('')
  const [referral, setReferral] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login request:', { mobile, referral })
    onClose()
  }

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-card" onClick={(e) => e.stopPropagation()}>
        <button className="dialog-close" onClick={onClose}>
          ×
        </button>

        <div className="dialog-left">
          <div className="promo-badge">Login & Get</div>
          <div className="promo-offer">₹500 Off*</div>
          <div className="promo-text">On 1st Booking</div>
          <div className="promo-code">Code : ABHIFIRST</div>
          <div className="promo-image">
            <div className="promo-bus" />
          </div>
        </div>

        <div className="dialog-right">
          <h2>Login to AbhiBus</h2>
          <p className="dialog-subtitle">Enter Mobile Number to Continue</p>
          <form onSubmit={handleSubmit} className="dialog-form">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              id="mobile"
              type="tel"
              placeholder="+91"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />

            <label htmlFor="referral">Have a referral code?</label>
            <input
              id="referral"
              type="text"
              placeholder="Enter Referral Code if Available"
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
            />

            <button type="submit" className="dialog-submit">Login</button>
          </form>

          <div className="dialog-divider">Or Continue With</div>
          <button className="google-btn">Sign in with google</button>
          <p className="dialog-terms">
            By logging in, I understand & agree to AbhiBus{' '}
            <a href="#">terms of use</a> & <a href="#">privacy policy</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp