

import LightbulbTwoToneIcon from '@mui/icons-material/LightbulbTwoTone';
import {Box,Typography} from '@mui/material';
import {styled} from '@mui/material/styles';


const Light= styled(LightbulbTwoToneIcon)`
font-size: 150px;
color:#e5e4e2;
`;



const Typo=styled(Typography)`
color:#e5e4e2;
font-size: 30px;
`;

const Cont=styled(Box)`
display:flex;
flex-direction: column;
align-items: center;
margin:35vh;
`;

const EmptyNotes=()=>{
    return(
         <Cont>
            <Light/>
            <Typo>Your Notes will appear here.</Typo>
         </Cont>
    )
};
export default EmptyNotes;
