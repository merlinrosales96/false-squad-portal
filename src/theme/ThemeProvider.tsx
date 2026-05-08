import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [mode] = useState<PaletteMode>('dark');

  const theme = createTheme({
    typography: {
      fontFamily: "'RussoOne', Arial, sans-serif",
    },
    palette: {
      mode,
      primary:    { main: '#00ffe7' },
      secondary:  { main: '#ff2d78' },
      background: { default: '#060608', paper: '#0e0e12' },
      text:       { primary: 'rgba(255,255,255,0.92)', secondary: 'rgba(255,255,255,0.45)' },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#060608',
            color: 'rgba(255,255,255,0.92)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { textTransform: 'none', fontFamily: "'RussoOne', Arial" },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
