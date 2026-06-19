# AI-Powered Smart Parking Finder 🚗

A production-ready full-stack application that predicts available parking spots in real-time using machine learning, sensor data, and historical patterns. Built with React, Node.js, Python FastAPI, PostgreSQL, and Redis.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Docker](https://img.shields.io/badge/Docker-enabled-blue)

## 📋 Project Overview

This is a complete, portfolio-grade project demonstrating modern full-stack development practices:

- **Real-time Parking Predictions**: ML-powered availability predictions for 5m, 15m, and 60m horizons
- **Mobile-First Web App**: React + Tailwind CSS PWA with map-based parking search and reservation
- **Admin Dashboard**: Monitor parking lots, model performance, and system metrics
- **Microservices Architecture**: Separate frontend, backend, and ML inference services
- **Production-Ready**: Docker, CI/CD pipelines, comprehensive tests, and cloud deployment ready

## 🏗️ Architecture

```
┌─────────────────┐
│   React App     │ (PWA, Real-time WebSocket)
│   (Frontend)    │
└────────┬────────┘
         │ HTTP/WS
         ▼
┌─────────────────────────────────────┐
│  Node.js + Express Backend API      │
│  (Auth, Reservations, Lots)         │
└────────┬────────────────────────────┘
         │
    ┌────┴────┬────────────┐
    ▼         ▼            ▼
┌────────┐ ┌──────┐   ┌──────────┐
│PostgreSQL│ Redis │   │ML Service│
│(Data)   │(Cache)│   │(Forecast)│
└────────┘ └──────┘   └──────────┘
```

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+ (for local development)
- Python 3.9+ (for ML service development)
- Git

### Option 1: Run with Docker Compose (Recommended)

```bash
# Clone the repository
git clone https://github.com/syedasaqlain1122-netizen/smart-parking-finder.git
cd smart-parking-finder

# Start all services (frontend, backend, ML, database)
docker-compose up -d

# Seed initial data
docker-compose exec backend npm run seed

# Train the ML model
docker-compose exec ml-service python scripts/train_model.py

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
# API Docs: http://localhost:5000/api/docs
# ML Service Docs: http://localhost:8000/docs
```

### Option 2: Local Development (Without Docker)

```bash
# Terminal 1: Frontend
cd frontend
npm install
npm run dev

# Terminal 2: Backend
cd backend
npm install
npm run dev

# Terminal 3: ML Service
cd ml-service
pip install -r requirements.txt
python -m uvicorn app.main:app --reload

# Terminal 4: PostgreSQL & Redis (using Docker)
docker-compose up postgres redis
```

## 📁 Project Structure

```
smart-parking-finder/
├── frontend/                 # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API clients
│   │   ├── hooks/           # Custom React hooks
│   │   ├── types/           # TypeScript types
│   │   └── App.tsx
│   ├── tests/               # Unit and E2E tests
│   └── package.json
│
├── backend/                  # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── routes/          # API endpoints
│   │   ├── controllers/     # Request handlers
│   │   ├── services/        # Business logic
│   │   ├── middleware/      # Auth, validation, logging
│   │   ├── db/              # PostgreSQL queries
│   │   ├── types/           # TypeScript interfaces
│   │   └── index.ts         # Entry point
│   ├── tests/
│   ├── scripts/             # Seed data, migrations
│   └── package.json
│
├── ml-service/              # Python + FastAPI
│   ├── app/
│   │   ├── main.py          # FastAPI app
│   │   ├── models/          # Model classes
│   │   ├── services/        # Prediction logic
│   │   └── schemas/         # Pydantic models
│   ├── scripts/
│   │   ├── train_model.py   # Training pipeline
│   │   └── evaluate.py      # Model evaluation
│   ├── models/              # Saved model artifacts
│   ├── tests/
│   └── requirements.txt
│
├── ingest/                   # Data pipeline & simulator
│   ├── simulator.py         # Parking occupancy simulator
│   ├── etl.py              # ETL pipeline
│   └── schema.sql          # Database schema
│
├── infra/                    # Infrastructure & deployment
│   ├── docker-compose.yml  # Local dev environment
│   ├── .github/workflows/
│   │   ├── ci.yml          # Lint, test, build
│   │   └── cd.yml          # Deploy (optional)
│   └── terraform/          # Cloud deployment (optional)
│
├── docs/                     # Documentation
│   ├── ARCHITECTURE.md      # System design
│   ├── API.md              # API documentation
│   └── DEPLOYMENT.md       # Deployment guide
│
├── Makefile                  # Build & run commands
├── docker-compose.yml        # Main Docker Compose file
├── LICENSE                   # MIT License
└── .env.example              # Environment variables template
```

## 🎯 Core Features

### For Drivers
- 🗺️ **Map View**: Browse parking lots with real-time availability
- 📍 **Smart Search**: Filter by location, price, and amenities
- 📅 **Reservations**: Reserve spots with time-based bookings
- 🔔 **Real-time Updates**: WebSocket notifications on availability changes
- 📱 **PWA Support**: Installable app, offline functionality
- 🔐 **Secure Auth**: JWT-based authentication

### For Administrators
- 📊 **Dashboard**: Monitor all parking lots and metrics
- 🤖 **Model Performance**: View prediction accuracy and metrics
- 📈 **Analytics**: Historical trends and usage patterns
- 🛠️ **Lot Management**: Add, edit, delete parking lots and zones

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|----------|
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS | Modern web app |
| **Backend** | Node.js, Express, TypeScript | RESTful API |
| **Database** | PostgreSQL | Primary data store |
| **Cache** | Redis | Session & real-time cache |
| **ML** | Python, FastAPI, LightGBM | Occupancy predictions |
| **Real-time** | Socket.IO | WebSocket updates |
| **Testing** | Jest, Playwright, pytest | Test suites |
| **DevOps** | Docker, GitHub Actions | Containerization & CI/CD |

## 📊 ML Model

The ML service provides parking occupancy predictions using:

- **Algorithm**: LightGBM with optional LSTM
- **Features**: Time of day, day of week, weather, recent occupancy
- **Horizons**: 5m, 15m, and 60m predictions
- **Metrics**: MAE, RMSE, Precision/Recall

## 🧪 Testing

```bash
# Run all tests
make test

# Or individually:
cd frontend && npm test
cd backend && npm test
cd ml-service && pytest
```

## 🚀 Commands

```bash
make help              # Show all commands
make install           # Install dependencies
make start             # Start all services
make stop              # Stop all services
make seed              # Seed database
make train-model       # Train ML model
make test              # Run all tests
make lint              # Run linters
```

## 📝 License

MIT License - see [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

Built with modern best practices in mind. Community contributions welcome!

---

**Happy Parking! 🚗✨**