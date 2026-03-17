import { createContext, useContext } from "react";

export const ThemeCtx = createContext({ dark: true, setDark: () => {} });
export const useTheme = () => useContext(ThemeCtx);
