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
import { GalleryPage } from "./GalleryPage";
import { Link } from "react-router-dom";

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
          <Typography variant="h6" marginBottom={"2rem"}>
            MENI
            <img
              style={{ width: "100%", paddingTop: "20px" }}
              src="./images/old divider swirl ornate floral.png"
            />
          </Typography>
          <Stack spacing={3}>
            <Link to="/">
              <Button variant="text">Home</Button>
            </Link>
            <Link to="/onama">
              <Button variant="text">O nama</Button>
            </Link>
            <Link to="/galerija">
              <Button variant="text">Galerija</Button>
            </Link>
            <Link to="/ponuda">
              <Button variant="text">Ponuda</Button>
            </Link>
            <Link to="/kontakt">
              <Button variant="text">Kontakt</Button>
            </Link>
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
