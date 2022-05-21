import React, { useContext } from "react";
import { UserContext } from "../context/user";
import defaultUser from "../data";
import DarkModeToggle from "./DarkModeToggle";
import ThemedButton from "./ThemedButton";

function Header() {
  const { user, setUser } = useContext(UserContext);
  function handleLogin() {
    if (user) {
      setUser(null);
    } else {
      setUser(defaultUser);
    }
  }

  return (
    <header>
      <h1>React Context</h1>
      <nav>
        <ThemedButton onClick={handleLogin}>
          {user ? "Logout" : "Login"}
        </ThemedButton>
        <DarkModeToggle />
      </nav>
    </header>
  );
}

export default Header;
