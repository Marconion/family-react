import {
  Drawer,
  Typography,
  Box,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const RightDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
          },
        }}
        onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon color="secondary"></MenuIcon>
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}>
        <Box p={2} width="150px" textAlign="center">
          <Typography variant="h6" marginBottom={"3rem"}>
            Side panel
          </Typography>
          <Stack spacing={3}>
            <Button variant="text">O nama</Button>
            <Button variant="text">Galerija</Button>
            <Button variant="text">Cenovnik</Button>
            <Button variant="text">Kontakt</Button>
            <Stack paddingTop={"70px"} alignItems={"center"}>
              <img
                height={"auto"}
                width={"110px"}
                src="./images/Logo uspravni sa poz.jpeg"
                alt="logo"
              />
            </Stack>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};
