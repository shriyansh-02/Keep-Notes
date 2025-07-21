import {useState,useRef,useContext} from 'react';

// import {InputBase} from "@material-ui/core/InputBase";

// import InputBase from '@mui/material/InputBase';
// or
import { InputBase } from '@mui/material';
import { Box , TextField, ClickAwayListener } from "@mui/material";
import { styled} from '@mui/material/styles';
import {v4 as uuid} from 'uuid';

// import {makeStyles} from '@mui/material/styles';

import {DataContext} from '../../context/DataProvider';

const Boxy=styled(Box)`
    display:flex;
    width:600px;
    flex-direction:column;
    box-shadow:0 1px 2px 0 rgb(60 64 67 /30%) ,  0 2px 6px 2px rgb(60 64 67 /15%);
    padding : 10px 15px;
    border-radius :8px;
    border-color:white;
    background:#f8f8ff;
    margin:auto;
    min-height:30px;
`;


const note={
    id:'',
    heading:'',
    text:''
}


const Form=()=>{


   const [showTextField, setShowTextField]=useState(false);

   const [addNote,setAddNote]=useState({...note,id:uuid()});

   const {setNotes}= useContext(DataContext);

   const contRef=useRef();

   const onTextAreaClick=()=>{
    setShowTextField(true);
    contRef.current.style.minHeight='100px';
   }


   const handleClick=()=>{
    setShowTextField(false);
    contRef.current.style.minHeight='30px';

    setAddNote({...note,id:uuid()});
    if(addNote.heading || addNote.text) {
        setNotes(prevArr=>[addNote,...prevArr]);

    }

   }







   const onTextChange=(e)=>{

    let changeNote={...addNote,[e.target.name]:e.target.value};
    setAddNote(changeNote);

   }


    return(

    <ClickAwayListener onClickAway ={handleClick}>

    <Boxy ref={contRef}>

        {showTextField &&
        <InputBase

        placeholder="Title"
        // varient="standard"
        // InputProps={{disableUnderline: true}}

        style={{marginBottom:10}}
        onChange={(e)=>onTextChange(e)}
        name='heading'
        value={addNote.heading}
        />
        }

        <InputBase
        placeholder="Write a Note..."
        multiline
        maxRows={Infinity}
        // style={{border:0}}
        // varient="standard"
        // InputProps={{disableUnderline: true,}}

        onClick={onTextAreaClick}
        onChange={(e)=>onTextChange(e)}
        name='text'
        value={addNote.text}
        />
    </Boxy>
    </ClickAwayListener>
    )
};
export default Form;
