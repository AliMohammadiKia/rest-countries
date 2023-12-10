import { useEffect, useState } from "react";

import { ReactComponent as LoadingLightMode } from "./loading-light-mode.svg";
import { ReactComponent as LoadingDarkMode } from "./loading-dark-mode.svg";

export const Loading = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDocumentDark = document.documentElement.classList.contains("dark");
    setIsDark(isDocumentDark);
  }, []);

  return isDark ? <LoadingDarkMode /> : <LoadingLightMode />;
};
