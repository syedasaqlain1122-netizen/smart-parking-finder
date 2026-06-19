export default function Home() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to Smart Parking Finder</h2>
        <p className="text-xl text-gray-600 mb-8">
          Find available parking spots in real-time with AI-powered predictions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl mb-2">🗺️</div>
            <h3 className="text-lg font-semibold mb-2">Real-time Map</h3>
            <p className="text-gray-600">View parking lots on an interactive map with live availability</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg">
            <div className="text-3xl mb-2">🤖</div>
            <h3 className="text-lg font-semibold mb-2">AI Predictions</h3>
            <p className="text-gray-600">Get predictions for parking availability in 5, 15, and 60 minutes</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <div className="text-3xl mb-2">📅</div>
            <h3 className="text-lg font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-600">Reserve your spot in seconds with our simple booking system</p>
          </div>
        </div>
      </div>
    </div>
  )
}
