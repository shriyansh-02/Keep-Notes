import * as React from 'react';
import { styled} from '@mui/material/styles';
import {AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



const Headerp = styled(AppBar)`
  z-index: 1201;
  background:#ebf6f7;
  // background:#fffff0;
  height:70px;
  box-shadow: 0 -1px 0 0 #dadceo;
`;



const Typo=styled(Typography)`
   color: #5F6368;
   font-size: 25px;
   margin-left: 25px;
`;




const  Header=({open , handleDrawer})=>{

   return( <Headerp open={open}>
    <Toolbar>
      <IconButton
        onClick={handleDrawer}
        edge="start"
        sx={{
          marginRight: '20px',
        }}
      >
        <MenuIcon />
      </IconButton>


       <img src={require('./2438239.png')} alt="logo" style={{width:45}} />


      <Typo>
        Keep Notes
      </Typo>
    </Toolbar>
  </Headerp>
   )
};

export default Header;
