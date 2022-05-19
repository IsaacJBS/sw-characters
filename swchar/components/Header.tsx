import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import logo from "../assets/sw-logo.svg";

const Header = () => {
  return (
    <Box
      component="header"
      display="flex"
      flexDirection="column"
      textAlign="center"
    >
      <Box marginTop={5}>
        <Image src={logo} alt="" width={200} height={100} />
      </Box>
      <Box marginTop={5}>
        <Typography
          variant="h1"
          color="#DAAF3B"
          fontSize={64}
          fontFamily="sans-serif"
        >
          🛸 STAR WARS CHARACTERS
        </Typography>
        <Typography
          variant="h2"
          color="#626E7C"
          fontFamily="sans-serif"
          fontSize={32}
        >
          A list of all Star Wars characters
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
