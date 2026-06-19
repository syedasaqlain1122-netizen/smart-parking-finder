import { Link } from 'react-router-dom'
import { useAuthStore } from '../stores/auth'

export default function Navigation() {
  const { user } = useAuthStore()

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex gap-6">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
        <Link to="/map" className="hover:text-primary">
          Find Parking
        </Link>
        {user && (
          <Link to="/reservations" className="hover:text-primary">
            My Reservations
          </Link>
        )}
        {user?.role === 'admin' && (
          <Link to="/admin" className="hover:text-primary">
            Admin Dashboard
          </Link>
        )}
      </div>
    </nav>
  )
}
