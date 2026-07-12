import React, { createContext, useCallback, useContext, useMemo, useState, useEffect } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

type ThemeMode = 'dark' | 'light';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark',
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('themeMode');
    return (saved as ThemeMode) || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = useMemo(() => {
    const isLight = mode === 'light';

    return createTheme({
      palette: {
        mode,
        ...(isLight
          ? {
              primary: { main: '#047857' },
              secondary: { main: '#0f766e' },
              background: { default: '#f8fafc', paper: '#ffffff' },
              text: { primary: '#0f172a', secondary: '#475569' },
              divider: 'rgba(15, 23, 42, 0.10)',
              success: { main: '#059669' },
              warning: { main: '#d97706' },
              info: { main: '#0284c7' },
            }
          : {
              primary: { main: '#34d399' },
              secondary: { main: '#5eead4' },
              background: { default: '#09090b', paper: '#111113' },
              text: { primary: '#f8fafc', secondary: '#a1a1aa' },
              divider: 'rgba(244, 244, 245, 0.10)',
              success: { main: '#34d399' },
              warning: { main: '#fbbf24' },
              info: { main: '#38bdf8' },
            }),
      },
      typography: {
        fontFamily: '"Inter", "Segoe UI", "Helvetica", "Arial", sans-serif',
        h1: { fontWeight: 750, letterSpacing: '-0.065em', lineHeight: 0.98 },
        h2: { fontWeight: 720, letterSpacing: '-0.045em', lineHeight: 1.05 },
        h3: { fontWeight: 700, letterSpacing: '-0.035em' },
        h4: { fontWeight: 680, letterSpacing: '-0.02em' },
        h5: { fontWeight: 680, letterSpacing: '-0.015em' },
        h6: { fontWeight: 650, letterSpacing: '-0.01em' },
        body1: { fontSize: '1rem', lineHeight: 1.75 },
        body2: { lineHeight: 1.7 },
        button: { textTransform: 'none', fontWeight: 700 },
      },
      shape: {
        borderRadius: 10,
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            html: {
              scrollBehavior: 'smooth',
            },
            body: {
              backgroundColor: isLight ? '#f8fafc' : '#09090b',
            },
            '::selection': {
              background: isLight ? 'rgba(4, 120, 87, 0.18)' : 'rgba(52, 211, 153, 0.24)',
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 10,
              padding: '10px 18px',
              transition: 'transform 180ms ease, border-color 180ms ease, background 180ms ease',
              boxShadow: 'none',
              '&:hover': {
                transform: 'translateY(-1px)',
                boxShadow: 'none',
              },
            },
            contained: {
              backgroundColor: isLight ? '#0f172a' : '#f8fafc',
              color: isLight ? '#ffffff' : '#09090b',
              '&:hover': {
                backgroundColor: isLight ? '#1e293b' : '#e4e4e7',
              },
            },
            outlined: {
              borderColor: isLight ? 'rgba(15, 23, 42, 0.16)' : 'rgba(244, 244, 245, 0.14)',
              color: isLight ? '#0f172a' : '#f8fafc',
              '&:hover': {
                borderColor: isLight ? 'rgba(4, 120, 87, 0.44)' : 'rgba(52, 211, 153, 0.45)',
                background: isLight ? 'rgba(4, 120, 87, 0.05)' : 'rgba(52, 211, 153, 0.07)',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              boxShadow: 'none',
              border: `1px solid ${isLight ? 'rgba(15, 23, 42, 0.10)' : 'rgba(244, 244, 245, 0.10)'}`,
              backgroundImage: 'none',
              backgroundColor: isLight ? '#ffffff' : '#111113',
              transition: 'transform 180ms ease, border-color 180ms ease, background 180ms ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                borderColor: isLight ? 'rgba(4, 120, 87, 0.28)' : 'rgba(52, 211, 153, 0.28)',
              },
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              '& .MuiOutlinedInput-root': {
                borderRadius: 10,
              },
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              fontWeight: 650,
            },
          },
        },
      },
    });
  }, [mode]);
  const contextValue = useMemo(() => ({ mode, toggleTheme }), [mode, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
