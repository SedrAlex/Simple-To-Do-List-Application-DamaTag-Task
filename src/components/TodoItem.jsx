import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoneAllSharpIcon from "@mui/icons-material/DoneAllSharp";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ListItem,
  Button,
  Box,
  Typography,
  ButtonBase,
  TextField,
} from "@mui/material";
import styled from "@emotion/styled";

const StyledTextField = styled(TextField)({
  // padding: "0.5rem",
  borderRadius: "13px",
  border: "none",
  backgroundColor: "#e1ebfd",
  color: "#271c6c",
  height: "58%",
});

const StyledButton = styled(ButtonBase)({
  borderRadius: "20%",
  border: "none",
  margin: "0 0.6rem",
  fontSize: "1.4rem",
  cursor: "pointer",
  color: "#271c6c",
  backgroundColor: "transparent",
  "&:focus": {
    outline: "none",
  },
});
export default function TodoItem(props) {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const [todo, setTodo] = useState("");
  console.log("props from store", props);

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const handleChange = (evt) => {
    setTodo(evt.target.value);
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      // here 13 is key code for entry key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <ListItem
      component={motion.li}
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={item.id}
      sx={{
        display: "flex",
        flexDirection: "column",
        background:
          "radial-gradient(circle, hsla(237, 34%, 78%, 0.9) 0%, hsla(219, 88%, 94%, 0.9) 100%)",
        margin: "0 1rem 1rem 0",
        height: "8rem",
        width: "18rem",
        borderRadius: "0.5rem",
        padding: "1rem",
        position: "relative",
        "@media (max-width: 640px)": {
          marginRight:"0"
        }
      }}
    >
      {" "}
      <TextField
        inputRef={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        id="standard-multiline-static"
        multiline
        variant="standard"
        sx={{
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#transparent",
          color: "#271c6c",
          height: "58%",
          "& .Mudisabled": {
            backgroundColor: "transparent",
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
        }}
      >
        <StyledButton
          component={motion.button}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
        >
          <EditIcon />
        </StyledButton>

        <StyledButton
          component={motion.button}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => props.completeTodo(item.id)}
        >
          <DoneAllSharpIcon sx={{ color: "green" }} />
        </StyledButton>
        <StyledButton
          component={motion.button}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => props.removeTodo(item.id)}
        >
          <CloseIcon sx={{ color: "red" }} />
        </StyledButton>
      </Box>
      {item.completed && (
        <Typography
          sx={{
            position: "absolute",
            right: "0.3rem",
            top: "0.3rem",
            backgroundColor: "#867bcd",
            border: "2px solid #272727",
            color: "#e1ebfd",
            fontSize: "0.8rem",
            padding: "0.3rem 1rem",
            borderRadius: "20px",
          }}
        >
          done
        </Typography>
      )}
    </ListItem>
  );


}
