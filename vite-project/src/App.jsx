import React, { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import SignUp from './components/SignUp.jsx'

function App() {
  const [showSignUp, setShowSignUp] = useState(false)

  const handleSignUpClick = () => {
    setShowSignUp(true)
  }

  return (
    <div className="app-shell">
      <Header onSignUpClick={handleSignUpClick} />
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </div>
  )
}

export default App