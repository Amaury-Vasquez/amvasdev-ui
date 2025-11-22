import { useCallback } from "react";

const useThemeChange = () => {
  const changeTheme = useCallback((theme: string) => {
    const root = document.querySelector("html");
    if (root) {
      root.setAttribute("data-theme", theme);
    }
  }, []);

  return { changeTheme };
};

export default useThemeChange;
