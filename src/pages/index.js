import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { container } from "./index.module.css";
import icon from "../images/icon.png";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#ABEB50",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const links = [
  {
    text: "Rockit",
    url: "https://www.cyberport.hk/enewsletter/v170/1700008.html",
    description:
      "Rockit was my very first venture. A health and wellness marketplace for fitness professionals " +
      "to find and manage their clients. As a client, one could share an activity with a friend, " +
      "or a stranger in order to meet new people and save money.  At Rockit, I served as the co-CEO, " +
      "CPO, and early CTO.  We ended up shutting down as we scaled too quickly and our burn rate was too high. " +
      "I'd be lazy to blame it on COVID, but it definitely didn't help. ",
    color: "#E95800",
  },
  {
    text: "BFAM - Quant Trading",
    url: "https://bfam-partners.com/",
    description:
      "I was a quant trader on the sovereign rates desk at BFAM Partners.  I was responsible for " +
      "modeling some signals' behavior mostly in python, and subsequently trading them with my PM's book." +
      "I spent too much time watching Lagarde's press conferences.",
    color: "#BC027F",
  },
  {
    text: "Shell Street Labs",
    url: "https://www.efinancialcareers.co.uk/news/2018/11/shell-street-labs-jobs",
    description:
      "Shell Street Labs is the Quant arm of BFAM Partners. Work was actually quite fun! " +
      "Was part of a stellar team of scientists and engineers responsible for alpha research and some execution." +
      "Some of our strategies went on to make a decent amount of money for the firm.",
    color: "#1099A8",
  },
];

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Hello there 👋!
        <br />
        <span style={headingAccentStyles}>I'm Nathan Landman</span>
      </h1>
      <p style={linkStyle}>Me in 10 seconds</p>
      <p style={paragraphStyles}>
        I'm a <code style={codeStyles}>Computer Scientist</code>, turned{" "}
        <code style={codeStyles}>Quant</code>, turned{" "}
        <code style={codeStyles}>Trader</code>, turned{" "}
        <code style={codeStyles}>Entrepreneur</code>.
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <Link to="/ten-minute-nate" style={linkStyle}>
            Me in 10 minutes
          </Link>
        </li>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a style={linkStyle} href={link.url}>
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <div style={{ maxWidth: 300, marginBottom: 96 }}>
        <StaticImage
          alt="lounge"
          src="https://static.thenounproject.com/png/148547-200.png"
        />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
