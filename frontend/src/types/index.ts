export interface User {
  id: string
  email: string
  role: 'user' | 'admin'
  created_at: string
}

export interface ParkingLot {
  id: string
  name: string
  address: string
  latitude: number
  longitude: number
  total_spots: number
  available_spots: number
  price_per_hour: number
  created_at: string
}

export interface Reservation {
  id: string
  user_id: string
  lot_id: string
  lot_name: string
  start_time: string
  end_time: string
  status: 'active' | 'completed' | 'cancelled'
  created_at: string
}

export interface Prediction {
  lot_id: string
  horizon_minutes: number
  predicted_availability: number
  confidence: number
}
