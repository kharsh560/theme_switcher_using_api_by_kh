import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
// Note; 48:20 :- Earlier we did not put anything inside the parenthesis, but we can put some default...
// ...values inside this parenthesis. And these values are goanna be the objects, simply which ...
// ...act as a default value to be provided to the component.
// And ofcourse the value could be a method or simply a value

// Note; 50min :- We can make Provider in this same file too!!!
export const ThemeProvider = ThemeContext.Provider;

// 51:10 min :- we make a custom hook which exports the ThemeContest inside useContext, 
// bcoz of which we do not need to import them individually (51:45) when we need them!

export default function useTheme() {
    return useContext(ThemeContext);
}

// 53:12 min -> Moving to App.js

