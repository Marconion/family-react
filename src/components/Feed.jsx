import { Stack, Typography } from "@mui/material";
import React from "react";

export const Feed = () => {
  return (
    <Stack
      spacing={5}
      textAlign={"center"}
      marginTop={"3rem"}
      padding={"0.5rem"}
      alignItems={"center"}>
      <Typography variant="h3">Dobrodošli na oficijalnu stranicu</Typography>
      {/* <img height={"350px"} src="/images/Family logo gold.png" alt="logo" /> */}

      <img
        height={"550px"}
        src="/images/Logo uspravni sa poz.jpeg"
        alt="logo"
      />
    </Stack>
  );
};
