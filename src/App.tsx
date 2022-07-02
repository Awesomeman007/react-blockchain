import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Main from "./core/components/pages/main";
import COLORS from "./core/constants/colors";
import NavBar from "./core/components/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Landing from "./core/components/pages/landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainRoute from "./core/routes/index.route";
import AuthProvider from "./core/contexts/authContext";

const Background = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${COLORS.backgroundPrimary};
`;

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    tertiary: {
      main: COLORS.tertiary,
    },
    backgroundPrimary: {
      main: COLORS.backgroundPrimary,
    },
    backgroundSecondary: {
      main: COLORS.backgroundSecondary,
    },
    textPrimary: {
      main: COLORS.text,
    },
    subtext: {
      main: COLORS.subtext,
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
  // typography: {
  //   dropdown: {
  //     color: COLORS.tertiary
  //   },
  // }
});

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    tertiary: Palette["primary"];
    backgroundPrimary: Palette["primary"];
    backgroundSecondary: Palette["primary"];
    textPrimary: Palette["primary"];
    subtext: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    tertiary: PaletteOptions["primary"];
    // dropdown?: Typogra
    backgroundPrimary?: PaletteOptions["primary"];
    backgroundSecondary?: PaletteOptions["primary"];
    textPrimary?: PaletteOptions["primary"];
    subtext?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
    tertiary: true;
    backgroundPrimary: true;
    backgroundSecondary: true;
    textPrimary: true;
    subtext: true;
  }
}

// Update the Toolbar's color prop options
declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    neutral: true;
    backgroundPrimary: true;
    backgroundSecondary: true;
    textPrimary: true;
    subtext: true;
  }
}

// Update the Toolbar's color prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsOverrides {
    primary: true;
    secondary: true;
    // tertiary: true;
    neutral: true;
    backgroundPrimary: true;
    backgroundSecondary: true;
    textPrimary: true;
    subtext: true;
  }
}

// declare module "@mui/icons-material" {
//   interface SvgIconPropsColorOverrides {
//     primary: true;
//     secondary: true;
//     neutral: true;
//     backgroundPrimary: true;
//     backgroundSecondary: true;
//     textPrimary: true;
//     subtext: true;
//   }
// }

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            {/* <NavBar /> */}
            {/* <Background> */}
            {/* <Main /> */}
            {/* <Landing /> */}
            <MainRoute />
            {/* <Routes>
              <Route path="/" element={<Main />} />
            </Routes> */}
            {/* </Background> */}
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
