import MapView from '../components/MapView'

export default function Map() {
  return (
    <div className="py-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Find Parking</h2>
        <p className="text-gray-600">Click on a marker to view details and make a reservation</p>
      </div>
      <MapView />
    </div>
  )
}
