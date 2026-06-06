// FRONTEND MVP - SETUP GUIDE

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

1. **Navigate to frontend**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
frontend/src/
├── components/           # Reusable React components
│   ├── Navbar.tsx       # Navigation bar
│   ├── XPTracker.tsx    # Level/XP display
│   ├── LessonCard.tsx   # Individual lesson card
│   ├── AchievementBadge.tsx  # Badge component
│   └── AITutorChat.tsx  # AI chat interface
├── pages/               # Full page components
│   ├── HomePage.tsx     # Landing page
│   ├── DashboardPage.tsx # User dashboard
│   ├── LessonsListPage.tsx # All lessons
│   ├── LessonPage.tsx   # Individual lesson view
│   ├── TutorPage.tsx    # AI tutor full page
│   └── PlaygroundPage.tsx # Code editor
├── types/               # TypeScript definitions
│   └── index.ts
├── data/                # Mock data
│   └── mockData.ts
├── utils/               # Utility functions
│   └── storage.ts       # localStorage helpers
├── styles/              # Global styles
│   └── globals.css
├── App.tsx              # Main app component
└── main.tsx             # Entry point
```

---

## 🎯 Features Implemented

### ✅ Home Page
- Hero section with call-to-action
- Feature showcase cards
- Stats display
- Beautiful gradient design

### ✅ Dashboard
- User profile section
- XP and level tracker with progress bar
- Streak counter
- Quick stats (lessons completed, achievements)
- Achievement badges grid
- Next lesson recommendation
- All lessons grid

### ✅ Lessons System
- **Lessons List Page**
  - Browse all 5+ lessons
  - Filter by difficulty
  - Search functionality
  - Progress tracking

- **Individual Lesson Page**
  - Story-driven content
  - Educational explanation
  - Code examples
  - Key points summary
  - Interactive quiz
  - Mark as complete functionality
  - AI Tutor link

### ✅ AI Tutor Chat
- Conversational interface
- Smart responses based on keywords
- Message history
- Loading indicators
- Suggestion sidebar with common topics
- Learning path progress tracking

### ✅ Python Playground
- Code editor with syntax styling
- Run code button
- Output console
- Code snippets library
  - Variables
  - Loops
  - Functions
  - If statements
  - Lists
- Copy & clear buttons
- Tips sidebar

### ✅ Navigation
- Responsive navbar
- Mobile hamburger menu
- User level/XP display
- Links to all pages

### ✅ Gamification
- XP tracking system
- Level calculation (1000 XP = 1 level)
- Progress bar to next level
- 7-day streak counter
- Achievement badges (locked/unlocked)
- Completion rewards

---

## 💾 Data Storage

All data is stored in **localStorage** for offline functionality:

- `codequest_user` - User profile, level, XP, streak
- `codequest_lessons` - Lesson progress
- `codequest_achievements` - Achievement unlock status

Mock data automatically loads on first visit.

---

## 🎨 Design System

### Colors
- **Primary**: Blue (#0284c7)
- **Accent**: Amber (#f59e0b)
- **Success**: Green (#10b981)
- **Background**: Light gray with dark mode support

### Components
- Cards with hover effects
- Gradient backgrounds
- Smooth animations
- Responsive grid layouts
- Dark/light mode compatible

### Typography
- Bold headings (text-3xl to text-6xl)
- Regular body text
- Monospace for code

---

## 🔄 User Flow

1. **Home Page** (entry point)
   ↓
2. **Dashboard** (overview + continue learning)
   ↓
3. **Lessons List** (browse all lessons)
   ↓
4. **Lesson Page** (learn + take quiz)
   ↓
5. **AI Tutor** (get help anytime)
   ↓
6. **Playground** (practice coding)

---

## 🧪 Mock Data

### Lessons (5 total)
1. Introduction to Variables (Beginner, Completed)
2. Data Types Mastery (Beginner, Completed)
3. Control Flow: If Statements (Intermediate)
4. Loops: For and While (Intermediate)
5. Functions: The Building Blocks (Intermediate)

### User Profile
- Username: CodeNinja
- Level: 5
- Total XP: 4250
- Streak: 7 days

### Achievements (5 total)
- First Step ✅ (unlocked)
- Python Master
- Quiz Master
- Week Warrior ✅ (unlocked)
- Level 10

### Quizzes
- Multiple choice questions
- Coding challenges
- Auto-grading with XP rewards

---

## 🚀 Next Steps

### Backend Integration
1. Replace mock data with API calls
2. Implement authentication
3. Connect to PostgreSQL database
4. Add OpenAI API for AI Tutor
5. Implement Pyodide for code execution

### Frontend Enhancements
1. Add dark/light mode toggle
2. Implement caching strategies
3. Add animations with Framer Motion
4. Add sound effects for achievements
5. Implement leaderboard page
6. Add user profile customization

### Features to Add
1. Real code execution (Pyodide)
2. Real AI responses (OpenAI)
3. User authentication
4. Multi-language support
5. Community challenges
6. Multiplayer competitions

---

## 📝 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check
```

---

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind not working
Make sure you have run:
```bash
npm install -D tailwindcss postcss autoprefixer
```

---

## 📚 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Lucide Icons** - Icons
- **Vite** - Build tool
- **localStorage** - Data persistence

---

## 🎓 Learning Resources

Check out these files to understand the codebase:

1. **types/index.ts** - Data structure definitions
2. **data/mockData.ts** - Sample data
3. **utils/storage.ts** - Data persistence logic
4. **components/** - Reusable UI components
5. **pages/** - Full page views

---

Made with ❤️ for CodeQuest MVP 🚀
