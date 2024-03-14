import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import DisplayTodos from "./components/DisplayTodos";
import {
  Box,
  GlobalStyles,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Box
        className="App"
        sx={{
          marginTop: "3rem",
          display: "flex",
          flexDirection: "column",
         
        }}
      >
        <Typography
          component={motion.h4}
          variant="h4"
          sx={{
            display: "inline",
            textAlign: "center",
            marginBottom: "2rem",
            fontFamily:"RocknRoll One",
            color: "#e1ebfd",
            textShadow: "0 0 5px #433aa8, 3px -1px 5px #271c6c",
          }}
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Todo App
        </Typography>
        <Box
          component={motion.div}
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <TodoForm />
          <DisplayTodos />
        </Box>
      </Box>
    </>
  );
}

export default App;
