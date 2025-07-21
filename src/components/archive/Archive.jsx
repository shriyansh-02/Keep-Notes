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
    background:#eeeeff;
    border-radius:8px;

`;


const Archive=({note})=>{

    const {notes,setNotes, archiveNotes,  setArchiveNotes,setDeleteNotes}=useContext(DataContext);

    const UnarchiveNote=(note)=>{
          const updateNotes=archiveNotes.filter(data=>data.id!==note.id);
          setArchiveNotes(updateNotes);
          setNotes(prevArr=>[note,...prevArr]);
    }

    const deleteNote=(note)=>{
        const updateNotes=archiveNotes.filter(data=>data.id!==note.id);
          setArchiveNotes(updateNotes);
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
            onClick={()=>UnarchiveNote(note)}
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

export default Archive;
