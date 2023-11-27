import { Box } from "@mui/material";
import Head from "next/head";
import { FC, ReactNode } from "react";
import { NavBar } from "../ui";
import { Sidebar } from "../ui";

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ title = "OpenJira", children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Sidebar />
      <NavBar />
      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
