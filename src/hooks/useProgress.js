import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'susu_state';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Migrate old state that doesn't have bookmarkedLessons
      if (!parsed.bookmarkedLessons) {
        parsed.bookmarkedLessons = [];
      }
      return parsed;
    }
  } catch {
    // corrupted state — start fresh
  }
  return {
    selectedLevel: null,
    completedLessons: [],
    bookmarkedLessons: [],
    lastVisited: null,
  };
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage full or unavailable — fail silently
  }
}

export function useProgress() {
  const [state, setState] = useState(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const setLevel = useCallback((levelId) => {
    setState(prev => ({ ...prev, selectedLevel: levelId }));
  }, []);

  const completeLesson = useCallback((lessonId) => {
    setState(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
      };
    });
  }, []);

  const uncompleteLesson = useCallback((lessonId) => {
    setState(prev => ({
      ...prev,
      completedLessons: prev.completedLessons.filter(id => id !== lessonId),
    }));
  }, []);

  const isLessonComplete = useCallback((lessonId) => {
    return state.completedLessons.includes(lessonId);
  }, [state.completedLessons]);

  const getTopicProgress = useCallback((topicLessons) => {
    if (!topicLessons || topicLessons.length === 0) return 0;
    const completed = topicLessons.filter(l => state.completedLessons.includes(l.id)).length;
    return Math.round((completed / topicLessons.length) * 100);
  }, [state.completedLessons]);

  const toggleBookmark = useCallback((lessonId) => {
    setState(prev => {
      const isBookmarked = prev.bookmarkedLessons.includes(lessonId);
      return {
        ...prev,
        bookmarkedLessons: isBookmarked
          ? prev.bookmarkedLessons.filter(id => id !== lessonId)
          : [...prev.bookmarkedLessons, lessonId],
      };
    });
  }, []);

  const isBookmarked = useCallback((lessonId) => {
    return state.bookmarkedLessons.includes(lessonId);
  }, [state.bookmarkedLessons]);

  const setLastVisited = useCallback((path) => {
    setState(prev => ({ ...prev, lastVisited: path }));
  }, []);

  const resetProgress = useCallback(() => {
    setState({
      selectedLevel: null,
      completedLessons: [],
      bookmarkedLessons: [],
      lastVisited: null,
    });
  }, []);

  return {
    selectedLevel: state.selectedLevel,
    completedLessons: state.completedLessons,
    bookmarkedLessons: state.bookmarkedLessons,
    lastVisited: state.lastVisited,
    setLevel,
    completeLesson,
    uncompleteLesson,
    isLessonComplete,
    getTopicProgress,
    toggleBookmark,
    isBookmarked,
    setLastVisited,
    resetProgress,
  };
}
