// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = useState('')

  function handleChange(e) {
    const usernameInput = e.target.value.toLowerCase()
    setUsername(usernameInput)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmitUsername(username)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input
            type="text"
            id="usernameInput"
            onChange={handleChange}
            value={username}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
