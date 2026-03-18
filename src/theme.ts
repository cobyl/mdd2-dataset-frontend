import { defaultTheme } from "react-admin";
import { createTheme } from "@mui/material/styles";

const palette = {
    primary: {
        main: "#000000",
    },
    secondary: {
        main: "#000000",
    },
    background: {
        default: "#ffffff",
    },
};

export const lightTheme = createTheme({
    ...defaultTheme,
    palette: {
        ...defaultTheme.palette,
        ...palette,
        mode: "light",
    },
    components: {
        ...defaultTheme.components,
        MuiAppBar: {
            styleOverrides: {
                colorDefault: {
                    backgroundColor: "#000000",
                    color: "#ffffff",
                },
            },
        },
    },
});
