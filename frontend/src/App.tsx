import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Map from './pages/Map'
import Reservations from './pages/Reservations'
import Admin from './pages/Admin'
import Login from './pages/Login'
import { useAuthStore } from './stores/auth'

function App() {
  const { user, loadUser } = useAuthStore()

  useEffect(() => {
    // Load user from localStorage on app mount
    loadUser()
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Navigation />
        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/reservations" element={user ? <Reservations /> : <Login />} />
            <Route path="/admin" element={user?.role === 'admin' ? <Admin /> : <Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
