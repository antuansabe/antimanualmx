'use client';

import { useState, useEffect } from 'react';

// Hook para manejar localStorage que será útil para persistir progreso offline
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Estado para almacenar el valor
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Función para actualizar el valor
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}

// Hook para el progreso de cursos
export function useCourseProgress(courseId: string) {
  const [progress, setProgress] = useLocalStorage(`course_progress_${courseId}`, {
    started: false,
    completed: false,
    progress: 0,
    currentModule: 0,
    completedModules: [] as string[],
    timeSpent: 0,
    lastAccessed: null as Date | null
  });

  const updateProgress = (updates: Partial<typeof progress>) => {
    setProgress({
      ...progress,
      ...updates,
      lastAccessed: new Date()
    });
  };

  const markModuleComplete = (moduleId: string) => {
    const newCompletedModules = [...progress.completedModules];
    if (!newCompletedModules.includes(moduleId)) {
      newCompletedModules.push(moduleId);
    }
    
    updateProgress({
      completedModules: newCompletedModules,
      progress: Math.min(100, (newCompletedModules.length / 4) * 100) // Asumiendo 4 módulos por curso
    });
  };

  const startCourse = () => {
    updateProgress({
      started: true,
      lastAccessed: new Date()
    });
  };

  const completeCourse = () => {
    updateProgress({
      completed: true,
      progress: 100
    });
  };

  const resetCourse = () => {
    setProgress({
      started: false,
      completed: false,
      progress: 0,
      currentModule: 0,
      completedModules: [],
      timeSpent: 0,
      lastAccessed: null
    });
  };

  return {
    progress,
    updateProgress,
    markModuleComplete,
    startCourse,
    completeCourse,
    resetCourse
  };
}

// Hook para estadísticas de herramientas
export function useToolStats(toolId: string) {
  const [stats, setStats] = useLocalStorage(`tool_stats_${toolId}`, {
    completed: false,
    lastUsed: null as Date | null,
    timesUsed: 0,
    timeSpent: 0
  });

  const recordUsage = (timeSpent: number = 0) => {
    setStats({
      ...stats,
      lastUsed: new Date(),
      timesUsed: stats.timesUsed + 1,
      timeSpent: stats.timeSpent + timeSpent
    });
  };

  const markCompleted = () => {
    setStats({
      ...stats,
      completed: true,
      lastUsed: new Date()
    });
  };

  return {
    stats,
    recordUsage,
    markCompleted
  };
}