import { Container, Box, Typography } from "@mui/material";
import CustomButton from "../components/CustomButton";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <Container>
      <Box color="#DAAF3B" sx={{ mx: "auto", textAlign: "center", mt: 30 }}>
        <Typography variant="h1">404 - error</Typography>
        <Typography variant="h2">
          It seems you are lost on the dark side.
        </Typography>
        <Link href={"/"} passHref>
          <Box component="a">
            <CustomButton text="Go back home" marginTop={10} />
          </Box>
        </Link>
      </Box>
    </Container>
  );
};

export default ErrorPage;
