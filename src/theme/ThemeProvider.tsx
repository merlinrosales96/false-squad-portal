import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
    const [mode] = useState<PaletteMode>('dark');

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#ff4081',
          },
          background: {
            default: '#f3efee',
            paper: '#ffffff',
          },
          text: {
            primary: '#000000',
            secondary: '#424242',
          },
        }
        : {
          primary: {
            main: '#008080',
          },
          secondary: {
            main: '#f48fb1',
          },
          background: {
            default: '#121B16',
            paper: '#001C1C',
          },
          text: {
            primary: '#ffffff',
            secondary: '#b0bec5',
          },
        }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
