import { useEffect, useState } from 'react'
import axios from 'axios'

function AxiosUsers() {
  // useState stores the list of users from the API response
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // useEffect runs once when the component appears on the screen
  useEffect(() => {
    setLoading(true)
    setError('')

    // Axios example
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Something went wrong while loading users.')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p className="status">Loading...</p>
  }

  if (error) {
    return <p className="status error">{error}</p>
  }

 return (
  <div className="user-list">
    {users.map((user) => (
      <div key={user.id} className="user-row">
        <div className="user-name">
          👤 <strong>{user.name}</strong>
        </div>

        <div className="user-info">
          <p><span>Email:</span> {user.email}</p>
          <p><span>Phone:</span> {user.phone}</p>
          <p><span>Website:</span> {user.website}</p>
        </div>
      </div>
    ))}
  </div>
)
}

export default AxiosUsers
