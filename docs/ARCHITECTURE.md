# CodeQuest Architecture

## System Overview

CodeQuest is a full-stack web application designed with a modern, scalable architecture following best practices for educational platforms.

## Architecture Diagram

```
┌─────────────────────────────────────────────────┐
│       Client Layer (Frontend - React)            │
│  React.js + TypeScript + Tailwind + Framer      │
└─────────────────────────────────────────────────┘
                      ↕
            API Gateway Layer
           (HTTPS / JWT Auth)
                      ↕
┌─────────────────────────────────────────────────┐
│    Business Logic Layer (Backend - Node.js)     │
│  ┌──────────────┐ ┌──────────────┐              │
│  │Auth Service  │ │Lesson Mgmt   │              │
│  └──────────────┘ └──────────────┘              │
│  ┌──────────────┐ ┌──────────────┐              │
│  │Code Executor │ │AI Tutor      │              │
│  └──────────────┘ └──────────────┘              │
│  ┌──────────────┐ ┌──────────────┐              │
│  │Progress Mgmt │ │Gamification  │              │
│  └──────────────┘ └──────────────┘              │
└─────────────────────────────────────────────────┘
                      ↕
┌─────────────────────────────────────────────────┐
│          Data Layer (PostgreSQL)                │
│  ├─ Users & Authentication                      │
│  ├─ Lessons & Content                           │
│  ├─ Progress & Achievements                     │
│  └─ Quiz & Challenge Data                       │
└─────────────────────────────────────────────────┘
                      ↕
┌─────────────────────────────────────────────────┐
│        External Services                        │
│  ┌──────────────┐ ┌──────────────┐              │
│  │OpenAI API    │ │Pyodide       │              │
│  │(AI Tutor)    │ │(Python Exec) │              │
│  └──────────────┘ └──────────────┘              │
└─────────────────────────────────────────────────┘
```

## Frontend Architecture

### Key Technologies
- **React 18**: Modern UI library with hooks
- **TypeScript**: Type-safe development
- **Redux Toolkit**: State management
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Axios**: HTTP client

### Component Structure
```
src/
├── components/
│   ├── common/           # Reusable UI components
│   ├── lesson/           # Lesson components
│   ├── playground/       # Code editor
│   ├── quiz/             # Quiz components
│   ├── dashboard/        # User dashboard
│   └── tutor/            # AI tutor chat
├── pages/                # Page-level components
├── services/             # API clients
├── store/                # Redux store
├── types/                # TypeScript types
└── styles/               # Global styles
```

### State Management
- **Auth**: User login, tokens, session
- **User**: Profile, XP, level, badges, streaks
- **Lessons**: Available lessons, completion status
- **Gamification**: Global gamification state

## Backend Architecture

### Service Layer Pattern
```
Routes → Controllers → Services → Models → Database
```

### Directory Structure
```
src/
├── controllers/          # Route handlers
├── models/               # Database models
├── routes/               # API routes
├── services/             # Business logic
├── middleware/           # Auth, error handling
├── config/               # Configuration
└── utils/                # Helper functions
```

### Key Services
- **AuthService**: JWT, password hashing, registration
- **ProgressService**: XP tracking, level calculation
- **LessonService**: Lesson management
- **TutorService**: AI tutor integration
- **CodeService**: Python code execution
- **GamificationService**: Badges, streaks, achievements

## Database Design

### Core Tables

**users**
- id, email, password_hash, username
- level, total_xp, streak_count
- last_activity_date, created_at, updated_at

**lessons**
- id, title, description, language
- difficulty, content (JSONB)
- xp_reward, order

**user_progress**
- id, user_id, lesson_id
- completed, xp_earned, completed_at

**achievements**
- id, name, description, icon_url

**user_achievements**
- id, user_id, achievement_id, unlocked_at

**quizzes**
- id, lesson_id, question_type
- question, options (JSONB), correct_answer
- xp_reward

**quiz_submissions**
- id, user_id, quiz_id
- user_answer, is_correct, xp_earned
- submitted_at

## API Design

### RESTful Endpoints
- `POST /api/auth/register` - Register
- `POST /api/auth/login` - Login
- `GET /api/lessons` - Get lessons
- `POST /api/lessons/:id/complete` - Complete lesson
- `GET /api/lessons/:id/quiz` - Get quiz
- `POST /api/code/execute` - Execute code
- `POST /api/tutor/ask` - Ask AI tutor
- `GET /api/users/profile` - Get profile
- `GET /api/achievements` - Get achievements

### Authentication
- JWT-based authentication
- Access tokens: 1 hour expiry
- Refresh tokens: 7 days expiry
- Secure httpOnly cookies

## Key Algorithms

### XP and Level System
```
Level = floor(total_xp / 1000) + 1
XP_to_next_level = (next_level * 1000) - current_xp

XP Rewards:
- Complete Lesson: 100 XP
- Quiz Correct Answer: 50 XP
- Coding Challenge: 150 XP
- Daily Streak Bonus: 20 XP/day
```

### Achievement System
```
Achievements unlock based on:
- Lessons completed (10, 25, 50, 100)
- XP milestones (500, 1000, 5000, 10000)
- Streak milestones (7, 30, 100 days)
- Quiz performance (5, 10, 25 perfect scores)
```

## Security

1. **Authentication**: JWT with refresh tokens
2. **Password**: Bcrypt hashing (salt rounds: 12)
3. **CORS**: Configured for frontend domain
4. **Input Validation**: Sanitization on all inputs
5. **Rate Limiting**: 100 req/min per user
6. **Code Execution**: Sandboxed Pyodide
7. **SQL Injection**: Parameterized queries
8. **XSS Protection**: HTML escaping, CSP headers

## Scalability

- **Horizontal Scaling**: Stateless API
- **Load Balancing**: Behind reverse proxy
- **Caching**: Redis for sessions (future)
- **CDN**: Static assets
- **Database**: Connection pooling
- **Microservices**: Code execution service (future)

## Deployment

- **Docker**: Containerized app
- **CI/CD**: GitHub Actions
- **Environments**: Dev, Staging, Production
- **Monitoring**: Logs and error tracking
- **Backup**: Daily database backups
