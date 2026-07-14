import { useState } from 'react'
import './App.css'
import { FetchUsers, AxiosUsers } from './intern/api'

function App() {
  // useState decides which example is active: 'fetch' or 'axios'
  const [activeView, setActiveView] = useState('fetch')

  return (
    <main className="app-shell">
      <section className="intro-card">
        <h1>Users list</h1>
        <div className="button-group">
  <button
    className={activeView === "fetch" ? "active" : ""}
    onClick={() => setActiveView("fetch")}
  >
    Fetch API
  </button>

  <button
    className={activeView === "axios" ? "active" : ""}
    onClick={() => setActiveView("axios")}
  >
    Axios
  </button>
</div>
      </section>

      <section className="content-card">
        {activeView === 'fetch' ? <FetchUsers /> : <AxiosUsers />}
      </section>
    </main>
  )
}

export default App
