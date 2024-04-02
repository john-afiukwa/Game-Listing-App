import React, { useContext, useEffect, useState } from "react";
import "../Components/styledcomponents.css";
import Logo from "./../assets/Images/logo.png";
import * as HiIcons from "react-icons/hi2";
import useLocalStorage from "use-local-storage";
// import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  const [isDarkModeActive, setIsDarkModeActive] = useLocalStorage(
    "isDark",
    false
  );

  // const { theme, setTheme } = useContext(ThemeContext);

  const ToggleDarkMode = () => setIsDarkModeActive(!isDarkModeActive);

  const ToggleDarkModeHandler = ({ active, handleClickAction, style }) => {
    if (!active) {
      return <HiIcons.HiMoon onClick={handleClickAction} className={style} />;
    }
    return <HiIcons.HiSun onClick={handleClickAction} className={style} />;
  };

  // useEffect(() => {
  //     console.log(theme)
  // }, [])

  return (
    <div
      className="flex items-center p-2"
      data-theme={isDarkModeActive ? "dark" : "light"}
    >
      <img src={Logo} width={60} height={60} />

      <div className="flex items-center w-full py-2 px-4 my-0 mx-5 rounded-full bg-slate-200">
        <HiIcons.HiOutlineMagnifyingGlass />
        <input
          type="text"
          className="bg-transparent outline-none py-0 px-2 w-full"
          placeholder="Search Games"
        />
      </div>

      <div>
        <ToggleDarkModeHandler
          active={isDarkModeActive}
          handleClickAction={ToggleDarkMode}
          style="light__dark-mode-i"
        />
      </div>
    </div>
  );
};

export default Header;
