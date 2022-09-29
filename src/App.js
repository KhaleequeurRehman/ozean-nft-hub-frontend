import logo from "./logo.svg";
import styles from "./App.module.sass";
import Dashboard from "./screens/Dashboard";
import Error from "./screens/Error";
import { Route, Routes } from "react-router-dom";
import Maintenance from "./screens/Maintenance";
import Profile from "./screens/Profile"
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className={styles.container}>
              <Dashboard />
            </div>
          }
        />
        <Route
          exact
          path="/error"
          element={
              <Error headingText="404" 
              subHeadingText= "Oops! This Page is Not Found." 
              discriptionText="The requested page dose not exist" />
          }
        />
        <Route
          exact
          path="/error2"
          element={
              <Error headingText="500" 
              subHeadingText= "Oops! This Page is Not Found." 
              discriptionText="The requested page dose not exist" />
          }
        />
        <Route
          exact
          path="/maintenance"
          element={
              <Maintenance />
          }
        />
        <Route
          exact
          path="/profile"
          element={
              <Profile />
          }
        />
      </Routes>
      </ThemeProvider>
  );
}

export default App;
