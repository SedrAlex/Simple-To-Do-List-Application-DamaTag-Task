import React, { useState } from "react";
import { connect } from "react-redux";
import { Box, ButtonBase, List, ListItem } from "@mui/material";

import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";

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

export const CustomButton = styled(ButtonBase)(({ theme }) => ({
  padding: "0.5rem 1.2rem",
  borderRadius: "20px",
  cursor: "pointer",
  border: "none",
  color: "rgb(14, 12, 25)",
  fontFamily: "RocknRoll One",
  backgroundColor: "rgb(239, 239, 239)",

  "&:not(:last-child)": {
    marginRight: "1rem",
  },
}));

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");

  return (
    <Box
      sx={{
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "@media (max-width: 640px)": {
          overflow: "hidden",
          marginTop: "2rem",
        },
      }}
    >
      <Box
        sx={{
          marginBottom: "2rem",
        }}
      >
        <CustomButton
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </CustomButton>
        <CustomButton
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </CustomButton>
        <CustomButton
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </CustomButton>
      </Box>
      <List
        sx={{
          listStyle: "none",
          display: "flex",
          alignSelf: "flex-start",
          flexWrap: "wrap",
          marginLeft: "5%",
          "@media (max-width: 640px)": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: 0,
            alignSelf: "center",
          },
        }}
      >
        <AnimatePresence>
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* // for completed Items */}
          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* // for all Items */}
          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
                return (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                );
              })
            : null}
        </AnimatePresence>
      </List>
    </Box>
  );
};

export default connect(mapStateToProps, mapDispatchToprops)(DisplayTodos);
