import { useCallback, useEffect, useState } from "react";

export const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((event: any) => {
    if (event.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }
    if (media.removeEventListener) {
      return () => media.removeEventListener("change", updateTarget);
    } else {
      // compatibility for browser that dont have removeEventListener
      return () => media.removeListener(updateTarget);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};
