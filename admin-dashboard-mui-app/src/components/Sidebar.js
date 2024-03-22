// import * as React from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import AppBar from "@mui/material/AppBar";
// import CssBaseline from "@mui/material/CssBaseline";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

// const drawerWidth = 300;

// export default function ClippedDrawer() {
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
//       >
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             AKSHAY KUMAR
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//       >
//         <Toolbar />

//         <Box sx={{ overflow: "auto" }}>
//           <List>
//             {[
//               "Home",
//               "Users",
//               "Roles and Permissions",
//               "Departments",
//               "Standards Library",
//               "Controls",
//               "Controls Library",
//               "Issues Management",
//               "Risk Management",
//               "Standard Assessment",
//               "Reports",
//               "Subscription Management",
//             ].map((text, index) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
//           dolor purus non enim praesent elementum facilisis leo vel. Risus at
//           ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
//           quisque non tellus. Convallis convallis tellus id interdum velit
//           laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
//           adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
//           integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
//           eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
//           quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
//           vivamus at augue. At augue eget arcu dictum varius duis at consectetur
//           lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
//           faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
//           ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
//           elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
//           sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
//           mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
//           risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
//           purus viverra accumsan in. In hendrerit gravida rutrum quisque non
//           tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
//           morbi tristique senectus et. Adipiscing elit duis tristique
//           sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </Box>
//     </Box>
//   );
// }























import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import GroupIcon from "@mui/icons-material/Group";
import LockIcon from "@mui/icons-material/Lock";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ReportIcon from "@mui/icons-material/Report";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { Link } from "react-router-dom";

const drawerWidth = 300;

export default function ClippedDrawer() {

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            AKSHAY KUMAR
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />

        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              {text: "Home", icon: <HomeIcon /> , navigate : "/"},
              {text: "Products", icon: <StorefrontIcon />, navigate : "/products"},
              {text: "Categories", icon: <CategoryIcon />, navigate : "/categories"},
              {text: "Customers", icon: <PeopleIcon />, navigate : "/customers"},
              {text: "Alerts", icon: <AddAlertIcon />, navigate : "/alerts"},
              {text: "Users", icon: <GroupIcon />},
              {text: "Roles and Permissions", icon: <LockIcon />},
              {text: "Departments", icon: <ApartmentIcon />},
              {text: "Standards Library", icon: <MenuBookIcon />},
              {text: "Controls", icon: <SettingsIcon />},
              {text: "Controls Library", icon: <LibraryBooksIcon />},
              {text: "Issues Management", icon: <ReportIcon />},
              {text: "Risk Management", icon: <AssignmentIcon />},
              {text: "Standard Assessment", icon: <AssessmentIcon />},
              {text: "Reports", icon: <ReportIcon />},
              {text: "Subscription Management", icon: <SubscriptionsIcon />}
            ].map(({ text, icon , navigate }, index) => (
               <Link to={navigate} style={{textDecoration:"none" , color:"black"}}>
              <ListItem key={text} disablePadding>
               <ListItemButton>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText style={{fontWeight:"bolder"}} primary={text} />
                </ListItemButton>
              </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* <Typography paragraph>
          AKSHAY KR
        </Typography> */}
      </Box>
    </Box>
  );
}
