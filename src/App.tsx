import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import Home from "./pages/Home";
import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </div>
  );
};

export default App;
