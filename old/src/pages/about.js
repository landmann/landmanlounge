import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const backButton = (
  <div style={{ marginTop: "60px" }}>
    <Link to="/" className="hover:underline text-links font-bold">
      Back
    </Link>
  </div>
);

const AboutPage = () => {
  return (
    <main
      className="page"
      style={{
        padding: 96,
        fontFamily: "-apple-system, Roboto, sans-serif, serif",
      }}
    >
      <h1 className="text-3xl font-bold pb-10">
        About Me
        <br />
        <span className="text-accent">Long story...</span>
      </h1>
      <h2 className="text-3xl font-bold py-10">2008 - 2011</h2>
      <p>
        Moved to Highlands Ranch, Colorado.. one of the most homogeneous cities
        in the US.
      </p>
      <h2 className="text-3xl font-bold py-10">1992 - 2008</h2>
      <p>Grew up in Lima, Peru</p>
      {backButton}
    </main>
  );
};

export default AboutPage;

export const Head = () => {
  return <title>Crib</title>;
};
