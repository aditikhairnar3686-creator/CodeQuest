# CodeQuest API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication

All protected endpoints require JWT token:
```
Authorization: Bearer <token>
```

## Authentication Endpoints

### Register
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "username": "username",
  "password": "password123"
}

Response: 201
{
  "success": true,
  "user": { "id": 1, "email": "...", "username": "..." },
  "token": "jwt_token"
}
```

### Login
```http
POST /auth/login

{
  "email": "user@example.com",
  "password": "password123"
}

Response: 200
{
  "success": true,
  "user": { ... },
  "token": "jwt_token"
}
```

### Refresh Token
```http
POST /auth/refresh
Authorization: Bearer <token>

Response: 200
{
  "success": true,
  "token": "new_jwt_token"
}
```

## User Endpoints

### Get Profile
```http
GET /users/profile
Authorization: Bearer <token>

Response: 200
{
  "success": true,
  "user": {
    "id": 1,
    "email": "user@example.com",
    "username": "username",
    "level": 5,
    "total_xp": 4250,
    "streak_count": 7
  }
}
```

### Get Statistics
```http
GET /users/stats
Authorization: Bearer <token>

Response: 200
{
  "success": true,
  "stats": {
    "level": 5,
    "total_xp": 4250,
    "xp_to_next_level": 750,
    "streak_count": 7,
    "total_lessons_completed": 12,
    "total_achievements": 5
  }
}
```

## Lesson Endpoints

### Get All Lessons
```http
GET /lessons
Authorization: Bearer <token>

Response: 200
{
  "success": true,
  "lessons": [
    {
      "id": 1,
      "title": "Introduction to Variables",
      "description": "Learn what variables are...",
      "difficulty": 1,
      "xp_reward": 100,
      "completed": false
    }
  ]
}
```

### Get Lesson Details
```http
GET /lessons/:id
Authorization: Bearer <token>

Response: 200
{
  "success": true,
  "lesson": {
    "id": 1,
    "title": "Introduction to Variables",
    "content": {
      "story": "In the kingdom of DataLand...",
      "explanation": "Variables are containers...",
      "example_code": "name = 'John'\\nage = 25"
    }
  }
}
```

### Complete Lesson
```http
POST /lessons/:id/complete
Authorization: Bearer <token>

Response: 200
{
  "success": true,
  "xp_earned": 100,
  "level_up": false
}
```

## Quiz Endpoints

### Get Lesson Quiz
```http
GET /lessons/:lessonId/quiz
Authorization: Bearer <token>

Response: 200
{
  "success": true,
  "quiz": [
    {
      "id": 1,
      "question_type": "multiple_choice",
      "question": "What is a variable?",
      "options": ["A container for data", "A function", "A loop"]
    }
  ]
}
```

### Submit Quiz Answer
```http
POST /quiz/:quizId/submit
Authorization: Bearer <token>

{
  "answer": "A container for data"
}

Response: 200
{
  "success": true,
  "is_correct": true,
  "xp_earned": 50,
  "explanation": "Yes, a variable is..."
}
```

## Code Execution Endpoints

### Execute Python Code
```http
POST /code/execute
Authorization: Bearer <token>

{
  "code": "name = 'Alice'\\nprint(f'Hello, {name}!')"
}

Response: 200
{
  "success": true,
  "output": "Hello, Alice!",
  "execution_time": 0.234
}
```

## AI Tutor Endpoints

### Ask AI Tutor
```http
POST /tutor/ask
Authorization: Bearer <token>

{
  "question": "What is a variable?",
  "context": "lesson_id: 1"
}

Response: 200
{
  "success": true,
  "answer": "A variable is like a labeled box...",
  "related_concepts": ["data types", "assignment"]
}
```

## Achievement Endpoints

### Get User's Achievements
```http
GET /users/achievements
Authorization: Bearer <token>

Response: 200
{
  "success": true,
  "achievements": [...],
  "total_unlocked": 5
}
```

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "error": "Invalid input"
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "error": "Unauthorized"
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": "Not found"
}
```
