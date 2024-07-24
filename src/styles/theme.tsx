'use client'
import { createTheme } from '@mui/material/styles';
import typography from "./typographyTheme";
import components from "./componentsTheme";

export const theme = createTheme(
    {
        direction: 'ltr',
        palette: {
          primary: {
            main: '#1a97f5',
            light: '#e6f4ff',
            dark: '#0078D3',
          },
          secondary: {
            main: '#1e4db7',
            light: '#ddebff',
            dark: '#173f98',
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
            secondary: '#777e89',
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
