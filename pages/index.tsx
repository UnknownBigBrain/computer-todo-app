import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Paper } from "@mui/material";
import { v4 as uuid } from "uuid";
import useTodo from "../store/useTodo.store";
import TodosList from "../components/TodosList";
import ReplayIcon from "@mui/icons-material/Replay";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";

const Home = () => {
  const { todos, addTodo, deleteTodos, getTodosInit } = useTodo();
  const [value, setValue] = useState<string>("");
  const [selected, setSelected] = useState([]);

  const handleSelect = (id: string) => {
    if (selected.includes(id)) {
      const filter = selected.filter((i) => i !== id);

      setSelected(filter);
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleRefresh = () => {
    getTodosInit();
  };

  const handleSelectAll = () => {
    if (selected.length === todos.length) {
      setSelected([]);
    } else {
      setSelected(todos.map((i) => i.id));
    }
  };

  const handleChangeValue = (e: any) => {
    setValue(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (value) addTodo(value);
    setValue("");
  };

  const handleDelete = () => {
    deleteTodos(selected);
    setSelected([]);
  };

  useEffect(() => {
    getTodosInit();
  }, []);

  return (
    <Box mt={2} className="flex flex-col md:flex-row px-4 gap-4">
      <Box className="md:w-1/3">
        <Paper
          elevation={3}
          className="w-full mb-4 p-4 bg-[#fafafa]    sticky top-5 overflow-hidden "
        >
          <img src="./logo-2.jpeg" className="w-[100%]  scale-105 mb-4" />

          <h1 className="text-lg mb-1">
            <b>School:</b> Charters Schools
          </h1>
          <h1 className="text-lg mb-1">
            <b>Class:</b> Computer Science
          </h1>
          <h1 className="text-lg mb-1">
            <b>Teacher:</b> Mr.Ahmed Amir Osman Mohamed
          </h1>
          <h1 className="text-lg mb-1">
            <b>Devolped By:</b> Abdullah Mohammed al hallaq - S239188
          </h1>

          <h1 className="text-lg mb-1">
            <b>About:</b> This is a todo app build using (React.Js, Next.js
            (Frame Work), Framer Motion (Animations), Zustand (Store
            Management), MUI, Tailwindcss )
          </h1>
        </Paper>
      </Box>

      <Box className="md:w-2/3">
        <Paper elevation={3} className="mb-6 p-4 sticky top-5 z-10 ">
          <Box>
            <h1 className="text-3xl">Todos</h1>
            <span className="mt-1 font-sans text-gray-400">
              Selected Todos - ({selected.length})
            </span>
          </Box>

          <Box mt={2}>
            <form onSubmit={handleSave}>
              <Box display="flex" gap={2}>
                <TextField
                  onChange={handleChangeValue}
                  value={value}
                  size="small"
                  variant="outlined"
                  sx={{ color: "steelblue" }}
                  name="value"
                  label="What To Do"
                />
                <Button
                  disabled={value !== "" ? false : true}
                  variant="outlined"
                  sx={{ color: "steelblue" }}
                  type="submit"
                  onClick={handleDelete}
                >
                  <AddIcon />
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>

        <TodosList
          data={todos}
          selectedItems={selected}
          handleSelect={handleSelect}
          handleSelectAll={handleSelectAll}
        />
      </Box>
    </Box>
  );
};

export default Home;
