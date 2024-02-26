import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { RightDrawer } from "./Drawer";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const StylizedToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  return (
    <AppBar position="sticky" sx={{ p: 1 }}>
      <StylizedToolbar>
        <Stack direction={"row"} alignItems={"center"}>
          {/* <RestaurantMenuIcon color="secondary" /> */}
          <Link to="/home">
            <Button>
              <Box sx={{ marginTop: "10px" }}>
                <img
                  style={{ height: "60px" }}
                  src="./images/Family-logo-gold-white.png"
                />
              </Box>
            </Button>
          </Link>
          <Typography variant="h7" sx={{ color: "#FBFADA", m: 1 }}>
            Family Event Place
          </Typography>
        </Stack>

        <Stack direction={"row"} spacing={3} alignItems={"center"}>
          <Stack
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
            direction={"row"}
            spacing={3}>
            <Button variant="outlined" color="secondary">
              {" "}
              O nama
            </Button>
            <Link to="/gallery">
              <Button variant="outlined" color="secondary">
                {" "}
                Galerija
              </Button>
            </Link>
            <Button variant="outlined" color="secondary">
              {" "}
              Kontakt
            </Button>
          </Stack>
          <RightDrawer />
        </Stack>
      </StylizedToolbar>
    </AppBar>
  );
};
