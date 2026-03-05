import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'susu_high_contrast';

export function useHighContrast() {
  const [highContrast, setHighContrast] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    try {
      localStorage.setItem(STORAGE_KEY, String(highContrast));
    } catch {
      // fail silently
    }
  }, [highContrast]);

  const toggle = useCallback(() => {
    setHighContrast(prev => !prev);
  }, []);

  return { highContrast, toggle };
}
