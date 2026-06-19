interface LotCardProps {
  id: string
  name: string
  available: number
  total: number
  price: number
  distance: number
  onReserve: (id: string) => void
}

export default function LotCard({
  id,
  name,
  available,
  total,
  price,
  distance,
  onReserve,
}: LotCardProps) {
  const occupancy = ((total - available) / total) * 100
  const availabilityClass = available > total * 0.5 ? 'bg-green-100' : 'bg-yellow-100'

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <div className="mt-3 space-y-2">
        <div className={`p-2 rounded ${availabilityClass}`}>
          <p className="text-sm font-medium">
            {available} / {total} spots available
          </p>
          <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${(available / total) * 100}%` }}
            ></div>
          </div>
        </div>
        <p className="text-sm text-gray-600">Occupancy: {occupancy.toFixed(0)}%</p>
        <p className="text-sm text-gray-600">Price: ${price}/hour</p>
        <p className="text-sm text-gray-600">Distance: {distance.toFixed(1)} km</p>
      </div>
      <button
        onClick={() => onReserve(id)}
        className="w-full mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors"
      >
        Reserve Spot
      </button>
    </div>
  )
}
