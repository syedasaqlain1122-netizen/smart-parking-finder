.PHONY: help install start stop logs seed train-model test test-frontend test-backend test-ml test-e2e build lint clean

help:
	@echo "Smart Parking Finder - Available Commands"
	@echo ""
	@echo "Setup:"
	@echo "  make install           - Install all dependencies"
	@echo "  make build             - Build all Docker images"
	@echo ""
	@echo "Development:"
	@echo "  make start             - Start all services with Docker Compose"
	@echo "  make stop              - Stop all services"
	@echo "  make logs              - View logs from all services"
	@echo ""
	@echo "Data & Training:"
	@echo "  make seed              - Seed database with sample data"
	@echo "  make train-model       - Train ML model"
	@echo ""
	@echo "Testing:"
	@echo "  make test              - Run all tests"
	@echo "  make test-frontend     - Run frontend tests"
	@echo "  make test-backend      - Run backend tests"
	@echo "  make test-ml           - Run ML service tests"
	@echo ""
	@echo "Quality:"
	@echo "  make lint              - Run linters"
	@echo "  make clean             - Clean build artifacts and caches"

install:
	@echo "Installing dependencies..."
	cd frontend && npm install
	cd ../backend && npm install
	cd ../ml-service && pip install -r requirements.txt
	@echo "✓ Dependencies installed"

build:
	@echo "Building Docker images..."
	docker-compose build
	@echo "✓ Docker images built"

start:
	@echo "Starting services..."
	docker-compose up -d
	@echo "✓ Services started"
	@echo ""
	@echo "Access points:"
	@echo "  Frontend: http://localhost:3000"
	@echo "  Backend API: http://localhost:5000"
	@echo "  Backend Docs: http://localhost:5000/api/docs"
	@echo "  ML Service: http://localhost:8000"
	@echo "  ML Docs: http://localhost:8000/docs"

stop:
	@echo "Stopping services..."
	docker-compose down
	@echo "✓ Services stopped"

logs:
	docker-compose logs -f

seed:
	@echo "Seeding database..."
	docker-compose exec backend npm run seed
	@echo "✓ Database seeded"

train-model:
	@echo "Training ML model..."
	docker-compose exec ml-service python scripts/train_model.py
	@echo "✓ Model trained"

test:
	@echo "Running all tests..."
	@make test-frontend
	@make test-backend
	@make test-ml
	@echo "✓ All tests passed"

test-frontend:
	@echo "Running frontend tests..."
	cd frontend && npm test -- --run
	@echo "✓ Frontend tests passed"

test-backend:
	@echo "Running backend tests..."
	cd backend && npm test -- --run
	@echo "✓ Backend tests passed"

test-ml:
	@echo "Running ML service tests..."
	cd ml-service && pytest
	@echo "✓ ML tests passed"

lint:
	@echo "Linting code..."
	cd frontend && npm run lint
	cd ../backend && npm run lint
	cd ../ml-service && ruff check . && mypy app/
	@echo "✓ Linting passed"

clean:
	@echo "Cleaning build artifacts..."
	rm -rf frontend/dist backend/dist
	find . -type d -name "node_modules" -exec rm -rf {} + 2>/dev/null || true
	find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
	find . -type d -name ".mypy_cache" -exec rm -rf {} + 2>/dev/null || true
	@echo "✓ Cleaned"

.DEFAULT_GOAL := help