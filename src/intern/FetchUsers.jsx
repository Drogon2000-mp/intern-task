import { useEffect, useState } from 'react'

function FetchUsers() {
  // useState stores the list of users we receive from the API
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // useEffect runs once when the component is first shown
  useEffect(() => {
    setLoading(true)
    setError('')

    // Fetch API example
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }
        return response.json()
      })
      .then((data) => {
        setUsers(data)
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
    <section className="cards-grid">
      {users.map((user) => (
        <article key={user.id} className="user-card">
          <h2>{user.name}</h2>
          <p>
            <span>Email:</span> {user.email}
          </p>
          <p>
            <span>Phone:</span> {user.phone}
          </p>
          <p>
            <span>Website:</span> {user.website}
          </p>
        </article>
      ))}
    </section>
  )
}

export default FetchUsers
