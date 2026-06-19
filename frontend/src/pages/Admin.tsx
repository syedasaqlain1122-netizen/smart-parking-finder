import { useEffect, useState } from 'react'
import { getAdminDashboard } from '../services/api'

interface DashboardData {
  total_lots: number
  total_reservations: number
  model_accuracy: number
  avg_occupancy: number
}

export default function Admin() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const dashData = await getAdminDashboard()
        setData(dashData)
      } catch (error) {
        console.error('Failed to load dashboard', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboard()
  }, [])

  if (loading) return <div className="text-center py-8">Loading dashboard...</div>
  if (!data) return <div className="text-center py-8">Failed to load dashboard</div>

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-8">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Total Lots</h3>
          <p className="text-3xl font-bold text-primary mt-2">{data.total_lots}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Total Reservations</h3>
          <p className="text-3xl font-bold text-secondary mt-2">{data.total_reservations}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Model Accuracy</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{(data.model_accuracy * 100).toFixed(1)}%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Avg Occupancy</h3>
          <p className="text-3xl font-bold text-warning mt-2">{(data.avg_occupancy * 100).toFixed(1)}%</p>
        </div>
      </div>
    </div>
  )
}
