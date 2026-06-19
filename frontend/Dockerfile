# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG VITE_API_BASE_URL=http://localhost:5000
ARG VITE_ML_SERVICE_URL=http://localhost:8000

ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}
ENV VITE_ML_SERVICE_URL=${VITE_ML_SERVICE_URL}

RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
