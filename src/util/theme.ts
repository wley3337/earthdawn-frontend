import { createTheme } from "@material-ui/core";

export const darkpondTheme = createTheme({
  //global theme elements like color etc
  // note: all colors are imported as RGB
  palette: {
    type: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
    primary: {
      main: "#001ecf",
    },
    secondary: {
      main: "#263238",
    },
  },
});
