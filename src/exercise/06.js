// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = useState(null)
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  function handleChange(e) {
    const usernameInput = e.target.value
    const valid = usernameInput === usernameInput.toLowerCase()
    if (!valid) {
      setError('Username must be lower case')
    } else {
      setError(null)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const usernameInput = e.target.elements.usernameInput.value
    onSubmitUsername(usernameInput)
  }
  return (
    <div>
      <span style={{color: 'red'}}>{error}</span>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input type="text" id="usernameInput" onChange={handleChange} />
        </div>
        <button type="submit" disabled={error}>
          Submit
        </button>
      </form>
    </div>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
