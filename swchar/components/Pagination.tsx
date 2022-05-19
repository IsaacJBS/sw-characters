import { Box, Button, Typography } from "@mui/material";
import CustomButton from "./CustomButton";

interface Props {
  actualPage: number;
  setActualPage: any;
  totalPages: number;
}

const Pagination = ({ actualPage, setActualPage, totalPages }: Props) => {
  const pageNumber = [];

  for (let index = 1; index <= totalPages; index++) {
    pageNumber.push(index);
  }

  const handleSetNextPage = () => {
    setActualPage(actualPage + 1);
  };

  const handleSetPreviousPage = () => {
    setActualPage(actualPage - 1);
  };

  return (
    <Box display="flex" flexDirection="column" textAlign="center">
      <Box marginTop={5}>
        <CustomButton
          text="« Previous page"
          disabled={actualPage === 1 ? true : false}
          onClick={handleSetPreviousPage}
        />
        {pageNumber.map((number) => (
          <CustomButton
            text={number}
            disabled={actualPage === number ? true : false}
            onClick={() => setActualPage(number)}
            key={number}
          />
        ))}
        <CustomButton
          text="Next page »"
          disabled={actualPage === totalPages ? true : false}
          onClick={handleSetNextPage}
        />
      </Box>
      <Box marginTop={5} marginBottom={10}>
        <Typography
          color="#CFD4D8"
          fontWeight="bold"
        >{`Current page: ${actualPage}`}</Typography>
      </Box>
    </Box>
  );
};

export default Pagination;
