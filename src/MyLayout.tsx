import { Layout, LayoutProps } from "react-admin";
import { Box } from "@mui/material";
import { MyAppBar } from "./MyAppBar";
import { MyMenu } from "./MyMenu";
import { MyFooter } from "./MyFooter";

export const MyLayout = (props: LayoutProps) => (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Layout
            {...props}
            appBar={MyAppBar}
            menu={MyMenu}
            sx={{ flexGrow: 1, minHeight: "unset" }}
        >
            {props.children}
        </Layout>
        <MyFooter />
    </Box>
);
