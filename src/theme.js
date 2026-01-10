import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3498db',
      light: '#5dade2',
      dark: '#2980b9',
    },
    secondary: {
      main: '#818f9d',
      light: '#95a5a6',
      dark: '#7f8c8d',
    },
    background: {
      default: '#1f2025',
      paper: '#2c3e50',
    },
    text: {
      primary: '#ecf0f1',
      secondary: '#bdc3c7',
    },
    error: {
      main: '#e74c3c',
    },
    success: {
      main: '#2ecc71',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
    h1: {
      fontSize: '1.5rem',
      color: '#818f9d',
      fontWeight: 500,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#34495e',
            },
            '&:hover fieldset': {
              borderColor: '#3498db',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
        // contained: {
        //   '&:hover': {
        //     boxShadow: '0 4px 8px rgba(52, 152, 219, 0.3)',
        //   },
        // },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: '#2c3e50',
          color: '#ecf0f1',
          fontWeight: 500,
        },
        body: {
          color: '#ecf0f1',
        },
      },
    },
  },
});
