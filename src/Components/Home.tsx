import React from "react";
import { Container } from "@chakra-ui/react";
// @ts-ignore
import image from "../assets/images/tech-image.svg";
import "./styles.css";

function HomePage() {
  return (
    <>
      <Container className="headingContainer" centerContent>
        <h1
          style={{
            fontWeight: "800",
            color: "141c3a",
            marginBottom: "10px",
            fontSize: "32px",
          }}
        >
          Data Engineer & Full Stack Developer
        </h1>
        <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>
          I code and design amazing things(and pipelines)
        </h2>
      </Container>
      <Container className="imageContainer" centerContent>
        <img src={image} alt="" />
      </Container>
    </>
  );
}

export default HomePage;
