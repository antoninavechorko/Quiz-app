import {createTheme, responsiveFontSizes} from '@mui/material';

let theme = createTheme({
    palette: {
        primary: {main: '#733fbd'},
        secondary: {main: '#beb0d9'},
        text: {
            primary: '#733fbd',
            secondary: '#666',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        allVariants: {
            fontWeight: 400,
        },
        fontWeightLight: 300,
        fontWeightBold: 600,

        h1: {
            fontSize: 48,
        },
        h2: {
            fontSize: 28,
        },
        h3: {
            fontSize: 26,
        },
        h4: {
            fontSize: 20,
        },
        h5: {
            fontSize: 20,
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: ({theme}) => ({
                    color: theme.palette.text.secondary,
                })
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: ({theme}) => ({
                    borderRadius: theme.spacing(),
                    padding: ['7px', '16px'].join(' '),
                }),

                input: ({theme}) => ({
                    fontSize: 18,
                    fontWeight: 400,
                    color: theme.palette.text.secondary,
                }),
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({theme}) => ({
                    fontSize: 16,
                    color: theme.palette.primary.main,
                    marginBottom: '5px',
                }),
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: ({theme}) => ({
                    color: theme.palette.text.secondary,
                }),
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                    height: '60px',
                },
                contained: ({theme}) => ({
                    color: theme.palette.common.white,
                    fontSize: '22px',
                    fontWeight: 'bold',
                    '&:disabled': {
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.text.secondary,
                        border: 'none',
                    }
                }),
            }
        },
    },
});

theme = responsiveFontSizes(theme);
export default theme;