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

export const Navbar = () => {
  const StylizedToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  return (
    <div>
      <AppBar position="sticky" sx={{ p: 1 }}>
        <StylizedToolbar>
          <Stack direction={"row"} alignItems={"center"}>
            <RestaurantMenuIcon color="secondary" />
            <Typography variant="h6" sx={{ color: "#FBFADA", m: 1 }}>
              Family Event Centar
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
              <Button variant="outlined" color="secondary">
                {" "}
                Galerija
              </Button>
              <Button variant="outlined" color="secondary">
                {" "}
                Kontakt
              </Button>
            </Stack>
            <RightDrawer />
          </Stack>
        </StylizedToolbar>
      </AppBar>
    </div>
  );
};
