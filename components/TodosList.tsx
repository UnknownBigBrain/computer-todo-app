import React, { useState } from "react";

// Components
import {
  TableHead,
  Checkbox,
  List,
  TableCell,
  TableBody,
  Table,
  MenuItem,
  Box,
  Paper,
  Button,
  TableRow,
  IconButton,
} from "@mui/material";
import NotDone from "@mui/icons-material/Circle";
import Done from "@mui/icons-material/CheckCircleOutline";
import useTodo from "../store/useTodo.store";
import DeleteIcon from "@mui/icons-material/Delete";
import { motion } from "framer-motion";

const TodosList = ({
  data,
  handleSelect,
  handleSelectAll,
  selectedItems,
}: any) => {
  const newData = [...data].reverse();

  const { updateStatus, deleteTodos } = useTodo();
  const [page, setPage] = React.useState(0);
  const [exit, setExit] = useState<string | null>(null);

  if (!data.length) return null;
  return (
    <List component={Paper} sx={{ overflow: "hidden", p: 0 }}>
      {newData.map((i) => {
        return (
          <motion.div
            initial={{
              opacity: 0,
              translateY: "-100%",
            }}
            animate={
              exit !== i.id
                ? {
                    opacity: 1,
                    translateY: 0,
                  }
                : {
                    opacity: 0,
                    translateY: "0",
                    translateX: "-100%",
                    background: "#fafafa",
                  }
            }
            transition={{
              type: "spring",
              duration: 1,
            }}
            key={i.id}
          >
            <Box className="grid grid-cols-4 relative h-[70px] w-full px-4 py-1">
              <Box display="flex" alignItems="center">
                <Box display="flex" gap={2}>
                  {i.done ? (
                    <IconButton
                      onClick={() => updateStatus(i.id, false)}
                      color="success"
                    >
                      <Done />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => updateStatus(i.id, true)}
                      color="error"
                    >
                      <NotDone />
                    </IconButton>
                  )}
                </Box>
              </Box>

              <Box display="flex" alignItems="center">
                <h1>{i.val}</h1>
              </Box>

              <Box className="absolute  right-0  w-fit h-[70px] ">
                <Button
                  className="h-full"
                  color="error"
                  onClick={() => {
                    setExit(i.id);
                    setTimeout(() => {
                      deleteTodos([i.id]);
                      setExit(null);
                    }, 350);
                  }}
                >
                  <DeleteIcon />
                </Button>
              </Box>
            </Box>
          </motion.div>
        );
      })}
    </List>
  );
};

export default TodosList;
