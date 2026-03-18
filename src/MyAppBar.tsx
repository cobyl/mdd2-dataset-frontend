import { AppBar, LoadingIndicator } from "react-admin";
import Typography from "@mui/material/Typography";

const MyToolbar = () => (
    <>
        <LoadingIndicator />
    </>
);

export const MyAppBar = () => (
    <AppBar toolbar={<MyToolbar />}>
        <Typography
            variant="h6"
            color="inherit"
            sx={{ flex: 1, textAlign: "center" }}
        >
            MDD2 Dataset Portal
        </Typography>
    </AppBar>
);
