import { Card, CardActions , CardContent,Typography } from "@mui/material";
import {styled} from "@mui/material/styles";

import {useContext} from 'react';
import{DataContext} from '../../context/DataProvider'

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';





const StyledCard=styled(Card)`
    width:250px;
    margin:10px;
    border-shadow:none;
    border:2px solid #e0e0e0;
    background:#fffff0;
    border-radius:8px;

`;


const Note=({note})=>{

    const {notes,setNotes,setArchiveNotes,setDeleteNotes}=useContext(DataContext);

    const archiveNote=(note)=>{
          const updateNotes=notes.filter(data=>data.id!==note.id);
          setNotes(updateNotes);
          setArchiveNotes(prevArr=>[note,...prevArr]);
    }

    const deleteNote=(note)=>{
        const updateNotes=notes.filter(data=>data.id!==note.id);
          setNotes(updateNotes);
          setDeleteNotes(prevArr=>[note,...prevArr]);
    }


    return(
        <StyledCard>
            <CardContent>
               <Typography>{note.heading}</Typography>
               <Typography>{note.text}</Typography>
            </CardContent>

            <CardActions>
            <ArchiveTwoToneIcon
            fontSize="small"
            style={{marginRight:"auto"}}
            onClick={()=>archiveNote(note)}
            />


            <DeleteForeverTwoToneIcon
            fontSize="small"
            style={{marginLeft:"auto"}}
            onClick={()=>deleteNote(note)}
            />

            </CardActions>
        </StyledCard>
    )
}

export default Note;
