import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { ThemeContext } from "./Context/ThemeContext";
import useLocalStorage from "use-local-storage";

function App() {
  // const [theme, setTheme] = useLocalStorage("Theme", "dark");

  return (
    <>
      <Header />
      <Home />
    </>

    // <ThemeContext.Provider value={{theme, setTheme}}>
    //   <div className={`${theme} ${theme === "dark" ? "bg-[red]" : null}`}>
    //     <Header />
    //     <Home />
    //   </div>
    // </ThemeContext.Provider>
  );
}

export default App;
