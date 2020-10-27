import { createMuiTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: orange,
  },
});

export default darkTheme;
