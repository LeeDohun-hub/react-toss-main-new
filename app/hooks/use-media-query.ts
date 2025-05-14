import { useEffect, useState } from 'react';

export enum MediaQuery {
  MOBILE = '(max-width: 639px)',
  DESKTOP = '(min-width: 640px)',
}
const useMediaQuery = (query: MediaQuery) => {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const MediaQueryList = window.matchMedia(query);
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    MediaQueryList.addEventListener('change', handleChange);
    setMatches(MediaQueryList.matches);

    return () => {
      MediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]);
  return matches;
};

export default useMediaQuery;
