// ./src/components/App.js
import React, { useState } from "react";

import ResetStyle from "./styled/Reset";
import GlobalStyle from "./styled/Global";
import LoginPanel from "./LoginPanel/LoginPanel";
import ScadaPanel from "./ScadaPanel/ScadaPanel";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInName, setIsLoggedInName] = useState("Dawid Pietraszko");

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      {isLoggedIn ? (
        <ScadaPanel
          setIsLoggedIn={setIsLoggedIn}
          setIsLoggedInName={isLoggedInName}
        />
      ) : (
        <LoginPanel
          text="Login to the SCADA system"
          setIsLoggedIn={setIsLoggedIn}
          setIsLoggedInName={setIsLoggedInName}
        />
      )}
    </>
  );
};
export default App;