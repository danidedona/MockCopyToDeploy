import { useState } from "react";
import "../styles/App.css";
import { LoginButton } from "./LoginButton";
import REPL from "./REPL";

/**
 * This is the highest level component! This is essentially what gets displayed
 * on the main when the app is ran. It defines the props of the login button and
 * gives it its functionality.
 */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div className="App">
      <p className="App-header">
        <h1>Mock</h1>
        <LoginButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </p>
      {isLoggedIn && <REPL />}
    </div>
  );
}

export default App;
