import { useCallback } from "react";
import { THEME_LIST } from "../themes";

const useThemeChange = () => {
  const changeTheme = useCallback((theme: (typeof THEME_LIST)[number]) => {
    const root = document.querySelector("html");
    if (root) {
      root.setAttribute("data-theme", theme);
    }
  }, []);

  return { changeTheme };
};

export default useThemeChange;
