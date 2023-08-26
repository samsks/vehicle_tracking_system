import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#502fd4",
      contrastText: "#242526",
    },
    background: {
      default: "#242526",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body": {
          minHeight: "100vh",
          display: "flex",
          flex: 1,
          flexDirection: "column",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#502fd4",
          color: "#242526",
        },
      },
    },
  },
});

export default defaultTheme;
