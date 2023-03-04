import { createTheme } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo["A700"],
    },
  },
});

export default theme;
