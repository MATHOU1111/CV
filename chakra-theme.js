// chakra-theme.js
import { extendTheme } from "@chakra-ui/theme-utils";

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    styles: {
        global: (props) => ({
            body: {
                color: props.colorMode === 'dark' ? 'white' : 'black',
                bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.400',

            },
        }),
    },
});

export default theme;
