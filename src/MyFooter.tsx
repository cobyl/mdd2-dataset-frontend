import * as React from "react";
import { Box, Typography, Link } from "@mui/material";

export const MyFooter = () => (
    <Box
        component="footer"
        sx={{
            width: "100%",
            padding: "1rem",
            textAlign: "center",
            backgroundColor: "#000",
            color: "#fff",
            zIndex: 1100,
        }}
    >
        <Typography variant="body2">
            © {new Date().getFullYear()} -{" "}
            <Link
                href="https://ibb.waw.pl"
                target="_blank"
                rel="noopener"
                sx={{ color: "#fff", textDecoration: "underline" }}
            >
                ibb.waw.pl
            </Link>{" "}
            - MDD2 Dataset Portal
        </Typography>
    </Box>
);
