

import { useContext } from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "./EmptyNotes";

import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));



const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Notes = () => {
  const { notes, setNotes } = useContext(DataContext);


  const onDragEnd = (result) => {

    if (!result.destination) {
      return;
    }

    const items = reorder(notes, result.source.index, result.destination.index);

    setNotes(items);
  };







  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Form />
        {
         notes.length > 0 ?

                <Grid
                  container
                  style={{marginTop:16}}
                >
                  {notes.map(note => (

                        <Grid item>
                          <Note note={note} />
                        </Grid>
                      ))
                  }
                </Grid>
         :
          <EmptyNotes />
        }
      </Box>
    </Box>
  );
};
export default Notes;
