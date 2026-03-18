import * as React from "react";
import { Menu } from "react-admin";
import DescriptionIcon from "@mui/icons-material/Description";

export const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.ResourceItem name="proteins" />
        <Menu.Item
            to="/api"
            primaryText="Api spec"
            leftIcon={<DescriptionIcon />}
            onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                window.location.href = "/api";
            }}
        />
    </Menu>
);
