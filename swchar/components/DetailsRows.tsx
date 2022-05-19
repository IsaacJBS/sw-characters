import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  detail: string;
  text: string | any;
}

const DetailsRows = ({ detail, text }: Props) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box alignSelf="left" maxWidth={400}>
        <Typography
          marginTop={3}
          variant="body1"
          color="#676A71"
          fontFamily="sans-serif"
        >
          {detail}
        </Typography>
      </Box>
      <Box textAlign="left">
        <Typography
          marginTop={3}
          variant="body1"
          color="#CFD4D8"
          fontFamily="sans-serif"
          width={200}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailsRows;
