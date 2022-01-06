import { Home } from "./components/organims/Home";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from '../src/styles/themeSettings';

function App() {
  return (
    <ThemeProvider theme = { darkTheme }>
      <Home /> 
    </ThemeProvider>
  );
}

export default App;
