import React from "react";
import { Bars } from "react-loader-spinner";
import { Box } from "@mui/material";

interface Props {
  width: number;
  height: number;
}

const Loading = ({ width, height }: Props) => {
  return (
    <Box>
      <Bars width={width} height={height} color="#DAAF3B" />;
    </Box>
  );
};

export default Loading;
