import React, { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import SignUp from './components/SignUp.jsx'

function App() {
  const [showSignUp, setShowSignUp] = useState(false)

  const handleSignUpClick = () => {
    console.log('Sign up button clicked')
    setShowSignUp(true)
  }

  if (showSignUp) {
    return <SignUp onClose={() => setShowSignUp(false)} />
  }

  return (
    <div className="app-shell">
      <Header onSignUpClick={handleSignUpClick} />
    </div>
  )
}

export default App