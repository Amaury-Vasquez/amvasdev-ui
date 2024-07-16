import { useCallback } from "react";
import { THEME_LIST } from "../themes";

const useThemeChange = (onFinishChange = () => {}) => {
  const changeTheme = useCallback((theme: (typeof THEME_LIST)[number]) => {
    const root = document.querySelector("html");
    if (root) {
      root.setAttribute("data-theme", theme);
      onFinishChange();
    }
  }, []);

  return { changeTheme };
};

export default useThemeChange;
