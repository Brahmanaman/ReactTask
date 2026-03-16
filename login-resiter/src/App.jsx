import React, { useState } from 'react'
import Login from './components/Login'
import Register from "./components/Register"
const App = () => {
  let [islogin, setLogin] = useState(false)
  return (
    <>
      {
        islogin
          ? <Login onSwitch={() => setLogin(false)} />
          : <Register onSwitch={() => setLogin(true)} />
      }
    </>
  )
}

export default App