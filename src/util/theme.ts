import { createTheme } from '@material-ui/core'

// font families available with their fallback types
export const fontJosefin = "'Josefin Slab', serif"
export const fontQuicksand = "'Quicksand', sans-serif"
export const fontHind = "'Hind Siliguri', sans-serif"
export const fontMontserrat = "'Montserrat', sans-serif"
export const fontNewsCycle = "'News Cycle', sans-serif"
export const fontRaleway = "'Raleway', sans-serif"

export const darkpondTheme = createTheme({
    //global theme elements like color etc
    // note: all colors are imported as RGB
    palette: {
        type: 'dark',
        text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF',
        },
        primary: {
            main: '#001ecf',
        },
        secondary: {
            main: '#263238',
        },
    },
    typography: {
        fontFamily: ['Quicksand', 'sans-serif'].join(','),
    },
})
