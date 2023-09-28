import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Landing from './pages/Landing'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Admin from './pages/Admin'

const App = () => {
  const [user, setUser] = useState<{id: number, name: string} | null>(null)

  const login = () => {
    //Request user to backend
    setUser({
      id: 1,
      name: 'Angel',
    })
  }

  const logout = () => setUser(null)

  return (
    <BrowserRouter>
      <Navigation />
      {user ? (
        <button onClick={logout}>Logout</button>
      ): (
        <button onClick={login}>Login</button>
      )}
      <Routes>
        <Route index element={<Landing />}/>
        <Route path="/landing" element={<Landing />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/analytics" element={<Analytics />}/>
        <Route path="/admin" element={<Admin />}/>
      </Routes>
    </BrowserRouter>
  )
}

const Navigation = () => {
  return <nav>
    <ul>
      <li>
        <Link to='/landing'>Landing</Link>
      </li>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link to='/analytics'>Analytics</Link>
      </li>
      <li>
        <Link to='/admin'>Admin</Link>
      </li>
    </ul>
  </nav>
}

export default App
