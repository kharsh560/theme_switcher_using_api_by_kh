import { useEffect, useState } from "react";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./contexts/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme Button */}
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */} <Card />{" "}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
