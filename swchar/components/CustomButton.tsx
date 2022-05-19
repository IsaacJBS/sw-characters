import { Button } from "@mui/material";

interface Props {
  text: string | number;
  onClick?: any;
  disabled?: any;
  marginTop?: number;
}

const CustomButton = ({ text, onClick, disabled, marginTop }: Props) => {
  return (
    <Button
      color="inherit"
      onClick={onClick}
      variant="contained"
      disabled={disabled}
      sx={{
        margin: 1,
        backgroundColor: "#DAAF3B",
        fontWeight: "bold",
        color: "white",
        ":hover": { backgroundColor: "white", color: "#DAAF3B" },
        marginTop: marginTop,
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
