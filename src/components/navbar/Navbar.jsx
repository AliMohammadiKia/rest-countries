import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {}, [theme]);

  const handleSwitchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className="py-6 px-20 bg-white dark:bg-d-blue dark:text-very-l-gray shadow-md flex justify-between items-center">
      <div>
        <h1 className="font-extrabold text-2xl">Where in the world?</h1>
      </div>
      <div
        className="flex space-x-2 items-center cursor-pointer"
        onClick={handleSwitchTheme}
      >
        <FontAwesomeIcon
          icon={theme === "light" ? faMoon : faSun}
          className="text-lg"
        />
        <p className="font-semibold">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </div>
  );
};
