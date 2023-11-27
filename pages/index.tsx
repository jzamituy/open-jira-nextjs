import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Card, CardHeader, Grid } from "@mui/material";
import { Layout } from "@/components/layouts";
import { NextPage } from "next";
import { EntryList, NewEntry } from "@/components/ui";

const inter = Inter({ subsets: ["latin"] });

const HomePage: NextPage = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Layout title="Open Jira Tasks">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="Pending"></CardHeader>
              <NewEntry />
              <EntryList status="pending" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="In progress"></CardHeader>

              <EntryList status="in-progress" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="Done"></CardHeader>
              <EntryList status="finished" />
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default HomePage;
