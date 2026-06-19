import { useAuthStore } from '../stores/auth'
import { Link } from 'react-router-dom'

export default function Header() {
  const { user, logout } = useAuthStore()

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-primary">🅿️ Smart Parking</h1>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-gray-700">{user.email}</span>
              <button
                onClick={logout}
                className="px-4 py-2 bg-danger text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
