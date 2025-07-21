import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import {styled} from "@mui/material/styles";

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import LightbulbTwoToneIcon from '@mui/icons-material/LightbulbTwoTone';

import {Link} from 'react-router-dom';



// const StList=styled(List)`
// background:#7e5e60;
// `

const NavList = ({ open }) => {

  const nlist=[
    {id:1, name: 'Notes', icon: <LightbulbTwoToneIcon/>, route:'/'},
    {id:2, name: 'Archive', icon: <ArchiveTwoToneIcon/>, route:'/archive'},
    {id:3, name: 'Trash', icon: <DeleteForeverTwoToneIcon/>, route:'/delete'},
  ]

  return (
    <List>
      {nlist.map((list) => (
        <ListItem button key={list.id}>
          <Link to={list.route} style={{textDecoration: 'none', display: 'flex', color: 'inherit'}}>
            <ListItemIcon style={{alignItems: 'center'}}>
             {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
            </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
