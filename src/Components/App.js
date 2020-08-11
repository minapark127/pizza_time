import React from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

function App() {
  return (
    <div className="App">
      <Router />
      <GlobalStyles />
    </div>
  );
}

export default App;
