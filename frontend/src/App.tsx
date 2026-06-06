// src/App.tsx

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { User } from './types'
import { storageUtils } from './utils/storage'
import { Navbar } from './components/Navbar'
import { HomePage } from './pages/HomePage'
import { DashboardPage } from './pages/DashboardPage'
import { LessonsListPage } from './pages/LessonsListPage'
import { LessonPage } from './pages/LessonPage'
import { TutorPage } from './pages/TutorPage'
import { PlaygroundPage } from './pages/PlaygroundPage'
import './styles/globals.css'

function App() {
  const [user, setUser] = useState<User>(storageUtils.getUser())

  useEffect(() => {
    // Update user whenever localStorage changes
    const handleStorageChange = () => {
      setUser(storageUtils.getUser())
    }
    
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/lessons" element={<LessonsListPage />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
          <Route path="/tutor" element={<TutorPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
