import * as React from "react";
import Container from "@mui/material/Container";

import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Home from "../components/Home";

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Home />
      </Container>
    </div>
  );
};

export default Index;
