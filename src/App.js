import Feed from "./components/Feed";
import Rightsidebar from "./components/Rightsidebar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightsidebar />
        </Stack>
      </Box>
    </>
  );
}

export default App;
