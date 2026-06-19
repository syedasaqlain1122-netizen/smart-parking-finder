import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

const api = axios.create({
  baseURL: API_BASE_URL,
})

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Auth endpoints
export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password })
  const { token, user } = response.data
  localStorage.setItem('auth_token', token)
  return { token, user }
}

export const signup = async (email: string, password: string) => {
  const response = await api.post('/auth/signup', { email, password })
  const { token, user } = response.data
  localStorage.setItem('auth_token', token)
  return { token, user }
}

// Parking lots endpoints
export const getParkingLots = async () => {
  const response = await api.get('/lots')
  return response.data
}

export const getLotStatus = async (lotId: string) => {
  const response = await api.get(`/lots/${lotId}/status`)
  return response.data
}

export const getPredictions = async (lotId: string, horizon: number) => {
  const response = await api.get(`/lots/${lotId}/predictions`, {
    params: { horizon },
  })
  return response.data
}

// Reservations endpoints
export const getUserReservations = async () => {
  const response = await api.get('/reservations')
  return response.data
}

export const createReservation = async (lotId: string, startTime: string, endTime: string) => {
  const response = await api.post('/reservations', {
    lot_id: lotId,
    start_time: startTime,
    end_time: endTime,
  })
  return response.data
}

export const cancelReservation = async (reservationId: string) => {
  await api.delete(`/reservations/${reservationId}`)
}

// Admin endpoints
export const getAdminDashboard = async () => {
  const response = await api.get('/admin/dashboard')
  return response.data
}

export default api
