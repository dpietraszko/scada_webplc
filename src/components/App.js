// ./src/components/App.js
import React, { useState } from "react";

import ResetStyle from "./styled/Reset";
import GlobalStyle from "./styled/Global";
import LoginPanel from "./LoginPanel/LoginPanel";
import RegistrationPanel from "./RegistrationPanel/RegistrationPanel";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      {isLoggedIn ? (
        <RegistrationPanel setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginPanel
          text="Login to your account"
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
};
export default App;
