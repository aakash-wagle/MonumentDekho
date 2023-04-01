import React from "react";
import Navbar from "../Navbar/Navbar";
import LandingImageList from "./LandingImageList";
import { Container } from "@mui/material";
import Map2 from "../Maps/Map2";

const Landing = () => {
  console.log("Render");
  return (
    <React.Fragment>
      {/* NAVBAR COMPONENT */}
      <Navbar />
      {/* SIDE PANE FOR SIGN IN AND HERITAGE ART IN MIDDLE */}
      {/* <Container className="text-cyan-900">
        <LandingImageList/>
      </Container> */}
      <Container className="text-cyan-900">
        <Map2 />
      </Container>
    </React.Fragment>
  );
};

export default Landing;
