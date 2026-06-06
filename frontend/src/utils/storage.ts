// src/utils/storage.ts

import { User, Lesson, Achievement } from '../types';
import { mockUser, mockLessons, mockAchievements } from '../data/mockData';

const STORAGE_KEYS = {
  USER: 'codequest_user',
  LESSONS: 'codequest_lessons',
  ACHIEVEMENTS: 'codequest_achievements',
  XP_HISTORY: 'codequest_xp_history',
};

export const storageUtils = {
  // User
  getUser: (): User => {
    const stored = localStorage.getItem(STORAGE_KEYS.USER);
    return stored ? JSON.parse(stored) : mockUser;
  },

  setUser: (user: User) => {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  },

  updateXP: (xpGained: number): User => {
    const user = storageUtils.getUser();
    const newXP = user.totalXp + xpGained;
    const newLevel = Math.floor(newXP / 1000) + 1;
    
    const updated = {
      ...user,
      totalXp: newXP,
      level: newLevel,
      lastActivityDate: new Date().toISOString(),
    };
    
    storageUtils.setUser(updated);
    return updated;
  },

  // Lessons
  getLessons: (): Lesson[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.LESSONS);
    return stored ? JSON.parse(stored) : mockLessons;
  },

  setLessons: (lessons: Lesson[]) => {
    localStorage.setItem(STORAGE_KEYS.LESSONS, JSON.stringify(lessons));
  },

  completeLesson: (lessonId: string): Lesson[] => {
    const lessons = storageUtils.getLessons();
    const updated = lessons.map(lesson =>
      lesson.id === lessonId ? { ...lesson, completed: true } : lesson
    );
    storageUtils.setLessons(updated);
    
    // Award XP
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson) {
      storageUtils.updateXP(lesson.xpReward);
    }
    
    return updated;
  },

  // Achievements
  getAchievements: (): Achievement[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
    return stored ? JSON.parse(stored) : mockAchievements;
  },

  setAchievements: (achievements: Achievement[]) => {
    localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievements));
  },

  unlockAchievement: (achievementId: string): Achievement[] => {
    const achievements = storageUtils.getAchievements();
    const updated = achievements.map(achievement =>
      achievement.id === achievementId
        ? { ...achievement, unlockedAt: new Date().toISOString() }
        : achievement
    );
    storageUtils.setAchievements(updated);
    return updated;
  },

  // Reset all data
  resetData: () => {
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.LESSONS);
    localStorage.removeItem(STORAGE_KEYS.ACHIEVEMENTS);
  },
};
