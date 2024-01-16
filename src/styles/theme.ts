import {createTheme, responsiveFontSizes} from '@mui/material';

let theme = createTheme({
    palette: {
        primary: {main: '#733fbd'},
        error: {main: '#b4231c'},
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
            fontSize: 26,
        },
        h3: {
            fontSize: 22,
        },
        h4: {
            fontSize: 20,
        },
        h5: {
            fontSize: 18,
        },
    },
    components: {
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
                    border: `1px solid ${theme.palette.primary.main}`,
                }),
            },
        },
    },
});

theme = responsiveFontSizes(theme);
export default theme;