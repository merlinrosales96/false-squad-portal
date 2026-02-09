import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [mode] = useState<PaletteMode>('dark');

  const theme = createTheme({
    typography: {
      fontFamily: 'RussoOne, Arial',
    },
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
            main: '#00cec9', // Un cian más eléctrico
          },
          background: {
            default: '#0a0a0a', // Casi negro, pero con aire
            paper: '#1a1a1a',   // Un gris oscuro que resalte del fondo
          },
          secondary: {
            main: '#a29bfe', // Un lila suave para contrastar clips o logros
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
