import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
// import global styles
import "../styles/global.scss";
import TitlePage from "../components/TitlePage";
import Map from "../components/Map";
import Sponsors from "../components/Sponsors";
import Organizers from "../components/Organizers";
import TextPage from "../components/TextPage";

const MainPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TextPage />
      <Map />
      <Sponsors />
      <Organizers />
    </Layout>
  );
};

export default MainPage;

export const Head: HeadFC = () => (
  <>
    <title>Inżynierskie Targi Pracy BEST AGH KRAKÓW</title>
    <link rel="icon" href="/favicon.ico" />
  </>
);
