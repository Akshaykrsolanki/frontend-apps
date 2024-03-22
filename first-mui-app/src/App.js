// import Button from '@mui/material/Button';
// import DoneIcon from '@mui/icons-material/Done';
// import ErrorIcon from '@mui/icons-material/Error';
// import { Typography } from '@mui/material';
// function App() {
//   return (
//     <div className="App">
//       <Button variant="text" color='primary'size='small'>Normal Text Button</Button>
//       <Button startIcon={<DoneIcon/>} variant="contained" color='success' size='medium'>Success Button With Contained Text, icon</Button>
//       <Button startIcon={<ErrorIcon/>}variant="outlined" color='error'size='large'>Error Button With Outlined Text, icon</Button>
//       <Typography variant='h1' component="p">
//         It uses h1 style but it's p tag.
//       </Typography>
//       <Button variant='contained' sx={{
//               backgroundColor: "skyblue",
//               color: "#888",
//               margin: "5",
//               "&:hover":{backgroundColor: "lightblue"},
//               "&:disabled":{backgroundColor: "gray",
//               color:"white"
//               }
//       }}>My Unique Button</Button>
//     </div>
//   );
// }

// export default App;

import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
