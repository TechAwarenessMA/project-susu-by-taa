import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'susu_text_enlarged';

export function useTextSize() {
  const [enlarged, setEnlarged] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (enlarged) {
      document.documentElement.classList.add('text-enlarged');
    } else {
      document.documentElement.classList.remove('text-enlarged');
    }
    try {
      localStorage.setItem(STORAGE_KEY, String(enlarged));
    } catch {
      // fail silently
    }
  }, [enlarged]);

  const toggle = useCallback(() => {
    setEnlarged(prev => !prev);
  }, []);

  return { enlarged, toggle };
}
