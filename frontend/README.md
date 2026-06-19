# Frontend - Smart Parking Finder

Modern React + TypeScript web application with real-time parking lot browsing and reservation management.

## Features

- ✅ Interactive map view with Leaflet
- ✅ Real-time parking availability
- ✅ User authentication (JWT)
- ✅ Reservation management
- ✅ Admin dashboard
- ✅ PWA support
- ✅ Responsive Tailwind CSS design

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Run E2E tests
npm run test:e2e

# Lint code
npm run lint
```

## Project Structure

```
src/
├── components/      # Reusable components
├── pages/           # Page components
├── services/        # API client
├── stores/          # Zustand stores
├── types/           # TypeScript types
└── App.tsx          # Root component
```

## Environment Variables

Create `.env.local`:

```
VITE_API_BASE_URL=http://localhost:5000
VITE_ML_SERVICE_URL=http://localhost:8000
```

## Testing

Tests use Vitest for unit tests and Playwright for E2E tests.

## Deployment

The app is built as a static site and can be deployed to Vercel, Netlify, or any static host.
