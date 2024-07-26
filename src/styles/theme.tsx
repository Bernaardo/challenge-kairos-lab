'use client'
import { createTheme } from '@mui/material/styles';
import typography from "./typographyTheme";
import components from "./componentsTheme";

export const theme = createTheme(
    {
        direction: 'ltr',
        palette: {
          primary: {
            main: '#000000',
            light: '#FF4A4A',
            dark: '#A40000',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#FFFFFF',
            light: '#5DD3FF',
            dark: '#0162DE',
            contrastText: '#000000',
          },
          success: {
            main: '#60AF44',
            light: '#ebfaf2',
            dark: '#00964b',
            contrastText: '#ffffff',
          },
          error: {
            main: '#CA4122',
            light: '#fdf3f5',
            dark: '#e45a68',
          },
          text: {
            primary:'#ffffff',
            secondary: '#000000',
          },
          background: {
            default: '#000000',
            paper: '#565656'
          },
          action: {
            disabledBackground: 'rgba(73,82,88,0.12)',
            hoverOpacity: 0.02,
          },
        },
        typography,
        components
    }
)
