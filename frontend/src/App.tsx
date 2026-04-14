import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <div>
      <h1>NYC Amenity Finder</h1>
      <p>Message from backend: {message}</p>
    </div>
  )
}

export default App