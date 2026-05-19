import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})
export const ThemeProvider = ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}
/*
|--------------------------------------------------------------------------
| FLOW
|--------------------------------------------------------------------------
| 1. createContext() creates global theme storage
| 2. ThemeProvider provides theme data globally
| 3. useTheme() accesses that data anywhere
| 4. Avoids prop drilling between components
|
| Example:
| const { themeMode } = useTheme()
|
*/