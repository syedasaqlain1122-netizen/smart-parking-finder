import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { useEffect, useState } from 'react'
import { getParkingLots } from '../services/api'

interface ParkingLot {
  id: string
  name: string
  latitude: number
  longitude: number
  available_spots: number
  total_spots: number
}

const defaultIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export default function MapView() {
  const [lots, setLots] = useState<ParkingLot[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLots = async () => {
      try {
        const data = await getParkingLots()
        setLots(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load lots')
      } finally {
        setLoading(false)
      }
    }

    fetchLots()
  }, [])

  if (loading) return <div className="text-center py-8">Loading map...</div>
  if (error) return <div className="text-center py-8 text-danger">{error}</div>

  return (
    <MapContainer center={[40.7128, -74.006]} zoom={13} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {lots.map((lot) => (
        <Marker
          key={lot.id}
          position={[lot.latitude, lot.longitude]}
          icon={defaultIcon}
        >
          <Popup>
            <div className="text-sm">
              <h3 className="font-bold">{lot.name}</h3>
              <p>Available: {lot.available_spots} / {lot.total_spots}</p>
              <button className="mt-2 px-3 py-1 bg-primary text-white rounded text-xs">
                Reserve
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
