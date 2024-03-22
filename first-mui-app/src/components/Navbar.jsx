import React, { useState } from "react";
import { AccountCircle, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "lightgray",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "20%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  // backgroundColor: "red",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          AKSHAY
        </Typography>
        <AccountCircle sx={{ display: { xs: "block", sm: "none" } }} />
        <Search style={{display:"flex" , flexDirection:"row" , alignItems:"center" , gap:"0.5rem"}}>
          <SearchIcon style={{color:"black"}}/>
          <InputBase placeholder="Search..." />
          <CancelIcon style={{color:"black"}}/>

        </Search>
        <Icons>
          <Badge badgeContent={4} color="primary">
            <Mail color="action" />
          </Badge>
          <Badge badgeContent={4} color="primary">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://plus.unsplash.com/premium_photo-1664102191724-97e85d71a61a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://plus.unsplash.com/premium_photo-1664102191724-97e85d71a61a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Typography variant="span">Akshay Kumar</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Login</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
