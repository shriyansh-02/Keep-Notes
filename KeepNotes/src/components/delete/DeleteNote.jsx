import { Card, CardActions , CardContent,Typography } from "@mui/material";
import {styled} from "@mui/material/styles";

import {useContext} from 'react';
import{DataContext} from '../../context/DataProvider'

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import RestoreFromTrashTwoToneIcon from '@mui/icons-material/RestoreFromTrashTwoTone';




const StyledCard=styled(Card)`
    width:250px;
    margin:10px;
    border-shadow:none;
    border:2px solid #e0e0e0;
    background:#f1f9ec;
    border-radius:8px;

`;


const DeleteNote=({note})=>{

    const {notes,setNotes,setArchiveNotes,deleteNotes,setDeleteNotes}=useContext(DataContext);

    const restoreNote=(note)=>{
          const updateNotes=deleteNotes.filter(data=>data.id!==note.id);
          setDeleteNotes(updateNotes);
          setNotes(prevArr=>[note,...prevArr]);
    }

    const deleteNote=(note)=>{
        const updateNotes=notes.filter(data=>data.id!==note.id);
          setDeleteNotes(updateNotes);
    }


    return(
        <StyledCard>
            <CardContent>
               <Typography>{note.heading}</Typography>
               <Typography>{note.text}</Typography>
            </CardContent>

            <CardActions>

            <DeleteForeverTwoToneIcon
            fontSize="small"
            style={{marginRight:"auto"}}
            onClick={()=>deleteNote(note)}
            />

            <RestoreFromTrashTwoToneIcon
            fontSize="small"
            style={{marginLeft:"auto"}}
            onClick={()=>restoreNote(note)}
            />




            </CardActions>
        </StyledCard>
    )
}

export default DeleteNote;
