import React from "react";
import Box from "@mui/material/Box";

interface Props {
  children: React.ReactNode;
}

const BoxChar = ({ children }: Props) => {
  return (
    <Box
      width={470}
      height={150}
      bgcolor="#CFD4D8"
      display="flex"
      borderRadius={5}
      alignItems="center"
      margin={5}
      padding={3}
      component="section"
    >
      {children}
    </Box>
  );
};

export default BoxChar;
