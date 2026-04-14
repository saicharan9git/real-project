import React from 'react'
import './Header.css'

function Header({ onSignUpClick }) {
  return (
    <header className="site-header">
      

      <nav className="navigation-bar" aria-label="Primary navigation">
       <div className="top-bar">
        <div className="brand">abhibus</div>
      </div>
        <ul className="nav-items">
          <li className="nav-item">
            <span className="nav-icon">🏷️</span>
            <span>Offers</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">🎫</span>
            <span>Track Ticket</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">❓</span>
            <span>Need Help?</span>
          </li>
        </ul>
        <button className="login-btn" onClick={onSignUpClick}>Login/SignUp</button>
      </nav>
    </header>
  )
}

export default Header
