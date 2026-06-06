# Getting Started with CodeQuest

## Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **PostgreSQL**: 13 or higher
- **Git**: Latest version
- **Docker** (optional): For containerized setup

## Installation Methods

### Method 1: Docker (Recommended)

Fastest way to get started with all services running in containers.

```bash
# Clone the repository
git clone https://github.com/aditikhairnar3686-creator/CodeQuest.git
cd CodeQuest

# Start all services
docker-compose up

# Application will be available at:
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
# Database: localhost:5432
```

### Method 2: Local Development

Install and run services locally on your machine.

#### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Update .env with your configuration
# DATABASE_URL=postgresql://user:password@localhost:5432/codequest
# JWT_SECRET=your_secret_key
# OPENAI_API_KEY=sk-your-api-key

# Run database migrations
npm run migrate

# Start development server
npm run dev
```

#### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm start
```

## Configuration

### Backend Environment Variables

Create `backend/.env`:

```env
# Database
DATABASE_URL=postgresql://codequest:codequest123@localhost:5432/codequest

# JWT
JWT_SECRET=your_secret_key_here_min_32_chars

# OpenAI API (for AI Tutor)
OPENAI_API_KEY=sk-your-openai-api-key

# Application
NODE_ENV=development
PORT=5000

# CORS
CORS_ORIGIN=http://localhost:3000
```

### Frontend Environment Variables

Create `frontend/.env`:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

## Database Setup

### Using Docker

PostgreSQL runs automatically with `docker-compose up`.

### Local PostgreSQL

```bash
# Create database
createdb codequest

# Create user
createuser codequest

# Set password
psql -U postgres -c "ALTER USER codequest WITH PASSWORD 'codequest123';"

# Grant privileges
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE codequest TO codequest;"
```

## Verify Installation

### Backend Health Check

```bash
curl http://localhost:5000/api/health
```

### Frontend Access

Open http://localhost:3000 in your browser.

## Next Steps

1. **Read the Documentation**
   - [Architecture](ARCHITECTURE.md)
   - [API Documentation](API_DOCUMENTATION.md)
   - [Contributing](CONTRIBUTING.md)

2. **Start Contributing**
   - Create lessons
   - Improve UI/UX
   - Add new features

3. **Run Tests**
   ```bash
   npm test
   ```

## Need Help?

- 📖 Check the [documentation](../README.md)
- 🐛 Report bugs as [GitHub Issues](https://github.com/aditikhairnar3686-creator/CodeQuest/issues)
- 💬 Discuss in [GitHub Discussions](https://github.com/aditikhairnar3686-creator/CodeQuest/discussions)

Happy learning! 🚀
