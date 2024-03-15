import CssBaseline from "@mui/material/CssBaseline";

import ToDo from "./pages/ToDo";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout";
import Login from "./pages/Login";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import  Signup  from "./pages/Signup";

function App() {
  const theme = createTheme({
    palette:{mode : 'light'}
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route path='login' element={<Login />}/>
          <Route path='signup' element={<Signup />}/>
</Route>
<Route path='/' element={<AppLayout />}>
          <Route index  element={<Home />}/>
          <Route path='todo' element={<ToDo />}/>
</Route>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
