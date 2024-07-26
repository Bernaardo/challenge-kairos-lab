import { Components, Theme } from "@mui/material";
import { alpha } from "@mui/material/styles";

const components: Components<Theme>={
 
  MuiContainer: {
    styleOverrides: {
      root: (props) => ({
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
        maxWidth: '1600px',
        backgroundColor: props.theme.palette.primary.main, 
      }),
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: (props) => ({
        backgroundColor: props.theme.palette.primary.main,
        color: props.theme.palette.primary.contrastText,
        boxShadow: `0px 2px 6px ${props.theme.palette.primary.light}`, 
        '&:hover': {
          boxShadow: `0px 3px 12px ${props.theme.palette.primary.light}`,
        },
      }),
    },
  },

  MuiCircularProgress:{
    styleOverrides: {
      root: (props) => ({
        color: props.theme.palette.secondary.light,
       
      }),
    },
  },

  MuiButton: {
    styleOverrides: {
      root: (props) => ({
        textTransform: 'none',
        boxShadow: 'none',
        fontSize: '22px',
        lineHeight: '24px',
        fontWeight: '500',
        borderRadius: '7px',
        '&:hover': {
          boxShadow: `0px 2px 6px ${props.theme.palette.secondary.light}`,
        },
      }),
      sizeSmall: {
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '15px',
        paddingRight: '15px',
      },
      sizeMedium: {
        paddingTop: '14px',
        paddingBottom: '14px',
        paddingLeft: '32px',
        paddingRight: '32px',
      },
      sizeLarge: {
        paddingTop: '24px',
        paddingBottom: '24px',
        paddingLeft: '54px',
        paddingRight: '54px',
      },
      outlined: (props) => ({
        borderRadius: '0px',
        color: props.theme.palette.secondary.light,
        '&:hover': {
          borderColor: props.theme.palette.secondary.light,
          color: props.theme.palette.secondary.light,
        },
      }),
      contained: (props) => ({
        color: props.theme.palette.primary.light,
        backgroundColor: props.theme.palette.primary.main,
        borderColor: props.theme.palette.primary.light,
        boxShadow: `0px 2px 8px ${props.theme.palette.primary.light}`,
        '&:hover': {
          borderColor: props.theme.palette.primary.light,
          backgroundColor: props.theme.palette.primary.light,
          color: props.theme.palette.text.secondary,
          boxShadow: `0px 4px 12px ${props.theme.palette.primary.light}`,
        },
      }),
    },
  },

  MuiTypography: {
    styleOverrides: {
      body1: (props) => ({
          borderBottom: `1px solid ${props.theme.palette.secondary.light}`,
          paddingBottom: '4px',
          marginBottom: '4px',
        }),
        h3: (props) => ({
          borderBottom: `1px solid ${props.theme.palette.secondary.light}`,
          paddingBottom: '4px',
          marginBottom: '4px',
        }),
    },
  },

  MuiFormControl: {
    styleOverrides: {
      root: (props) => ({
        border: 'none',
      }),
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: (props) => ({
        color: props.theme.palette.secondary.light,
        backgroundColor:props.theme.palette.primary.main,
        '&.Mui-focused': {
          color: props.theme.palette.secondary.light,
          backgroundColor:props.theme.palette.primary.main,
        },
      }),
    },
  },

  MuiSelect: {
    styleOverrides: {
      root: (props) => ({
        color: props.theme.palette.secondary.light, 
        border: `1px solid ${props.theme.palette.secondary.light}`,
        borderRadius: '4px',
        '&:hover': {
          border: `1px solid ${props.theme.palette.secondary.light}`, 
          boxShadow: `0px 4px 12px ${props.theme.palette.secondary.light}`,
        },
        '&.Mui-focused': {
          border: `1px solid ${props.theme.palette.secondary.light}`,
          boxShadow: `0px 4px 12px ${props.theme.palette.secondary.light}`,
        },
        '&:before, &:after': {
            borderBottom: 'none',
          },
      }),
   
      icon: (props) => ({
        color: props.theme.palette.secondary.light,
      }),
    },
  },

  MuiMenu: {
    styleOverrides: {
      paper: (props) => ({
        backgroundColor: props.theme.palette.background.default,
        boxShadow: `0px 4px 12px ${props.theme.palette.secondary.light}`,
        
      }),
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: (props) => ({
        color: props.theme.palette.secondary.light, 
        backgroundColor: props.theme.palette.background.default,
        '&:hover': {
          backgroundColor: props.theme.palette.background.default,
          border:`1px solid ${props.theme.palette.secondary.light}`,
        },
        '&.Mui-selected': {
          color: props.theme.palette.secondary.light, 
          backgroundColor: props.theme.palette.background.paper, 
          '&:hover': {
            backgroundColor: props.theme.palette.background.default,
            
          },
        },
      }),
    },
  },


  MuiCard: {
    styleOverrides: {
      root: (props) => ({
        borderRadius: '5px',
        padding: '3px',
        margin: '3px',
        backgroundColor: props.theme.palette.background.default,
        color: props.theme.palette.text.primary,
        boxShadow: `0px 2px 8px ${props.theme.palette.secondary.light}`, 
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: `0px 4px 12px ${props.theme.palette.secondary.light}`, 
        },
      }),
    },
  },



  MuiInput: {
    styleOverrides: {
      root: (props) => ({
        color: props.theme.palette.secondary.light,
    
        '&:before': {
          borderBottomColor: props.theme.palette.secondary.light, 
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottomColor: (props.theme.palette.secondary.light), 
        },
        '&:after': {
          borderBottomColor: props.theme.palette.secondary.light, 
        },
      }),
      input: {
        padding: '8px',
      },
    },
  },

  MuiInputAdornment: {
    styleOverrides: {
      root: (props) => ({
        color: props.theme.palette.secondary.light,
      }),
    },
  },


  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: '40px',
      },
    },
  },

  MuiGrid: {
    styleOverrides: {
      root: {
        paddingTop: '0px',
        paddingBottom: '0px',
      },
    },
  },

  MuiTabs: {
    styleOverrides: {
      root: (props) => ({
        backgroundColor: props.theme.palette.background.default, 
      }),
      indicator: (props) => ({
        backgroundColor: props.theme.palette.secondary.main, 
      }),
    },
  },

  MuiTab: {
    styleOverrides: {
      root: (props) => ({
        '&.Mui-selected': {
          color: props.theme.palette.secondary.main, 
        },
        '&.Mui-focusVisible': {
          backgroundColor: props.theme.palette.secondary.main, 
        },
        '&:hover': {
          backgroundColor: props.theme.palette.action.hover,
        },
        color: props.theme.palette.secondary.contrastText, 
        borderBottom: `4px solid ${props.theme.palette.secondary.main}`,
      }),
    },
  },
  
}

export default components;