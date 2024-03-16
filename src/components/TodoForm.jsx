import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Box, ButtonBase, InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { useRef, useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import { Divider } from "@mui/material";
import { motion } from "framer-motion";
import { LogoutOutlined } from "@mui/icons-material";
import { useNavigate} from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
const navigate = useNavigate();
  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const handleChange = (evt) => {
    setTodo(evt.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');

    // Redirect to the login page
    navigate('/login');
 }
  const update = (id, value, e) => {
    if (e.which === 13) {
      // here 13 is key code for entry key
      props.updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <TextField
        sx={{
          minWidth: "15rem",
          width: "40vw",
          maxHeight: "5.5rem",
          backgroundColor: "#dad2e7",
          border: "none",
          borderRadius: "5px ",
          alignSelf: "center",
          borderColor: "rgb(67, 58, 168)",
        }}
        color="secondary"
        id="outlined-basic"
        label="add task"
        variant="outlined"
        onChange={handleChange}
        value={todo}
      />

      <Box display="flex" justifyContent="center">
        <ButtonBase
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="create todo"
          edge="end"
          type="submit"
          onClick={() => add()}
          sx={{
            marginLeft: "1rem",
            backgroundColor: "#271c6c",
            color: "#e1ebfd",
            borderRadius: "50%",
            border: "2px solid #e1ebfd",
            fontSize: "1.5rem",
            width: "3.2rem",
            height: "3.2rem",
            cursor: "pointer",
            boxShadow: "2px 4px 10px #271c6c",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <AddOutlinedIcon />
        </ButtonBase>

        <ButtonBase
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="create todo"
          edge="end"
          type="submit"
          onClick={() => handleLogout()}
          sx={{
            marginLeft: "1rem",
            backgroundColor: "#271c6c",
            color: "#e1ebfd",
            borderRadius: "50%",
            border: "2px solid #e1ebfd",
            fontSize: "1.5rem",
            width: "3.2rem",
            height: "3.2rem",
            cursor: "pointer",
            boxShadow: "2px 4px 10px #271c6c",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <LogoutOutlined />
        </ButtonBase>
      </Box>
    </Box>
  );
};
export default connect(mapStateToProps, mapDispatchToprops)(TodoForm);
