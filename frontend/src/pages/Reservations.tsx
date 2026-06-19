import { useEffect, useState } from 'react'
import { getUserReservations, cancelReservation } from '../services/api'

interface Reservation {
  id: string
  lot_name: string
  start_time: string
  end_time: string
  status: string
}

export default function Reservations() {
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const data = await getUserReservations()
        setReservations(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load reservations')
      } finally {
        setLoading(false)
      }
    }

    fetchReservations()
  }, [])

  const handleCancel = async (id: string) => {
    try {
      await cancelReservation(id)
      setReservations(reservations.filter(r => r.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to cancel reservation')
    }
  }

  if (loading) return <div className="text-center py-8">Loading...</div>

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">My Reservations</h2>
      {error && <div className="text-danger mb-4">{error}</div>}
      {reservations.length === 0 ? (
        <p className="text-gray-600">No reservations yet</p>
      ) : (
        <div className="space-y-4">
          {reservations.map((res) => (
            <div key={res.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">{res.lot_name}</h3>
              <p className="text-gray-600 mt-2">
                {new Date(res.start_time).toLocaleString()} -{' '}
                {new Date(res.end_time).toLocaleString()}
              </p>
              <p className="text-sm mt-2">
                <span className={`px-2 py-1 rounded text-white ${
                  res.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                }`}>
                  {res.status}
                </span>
              </p>
              {res.status === 'active' && (
                <button
                  onClick={() => handleCancel(res.id)}
                  className="mt-4 px-4 py-2 bg-danger text-white rounded hover:bg-red-600"
                >
                  Cancel Reservation
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
