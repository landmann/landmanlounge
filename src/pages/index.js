import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import icon from "../images/icon.png";

const pageStyles = {
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 600,
};
const headingAccentStyles = {
  color: "#74b715",
};

const paragraphStyles = {
  marginBottom: 35,
  lineHeight: 1.5,
  // color gray
  fontWeight: 5,
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
  color: "#8953A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
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

const rightAlign = {
  display: "flex",
  justifyContent: "flex-end",
  gap: "1rem",
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
      "I'd be lazy to blame it on COVID, and I get lazy. ",
    color: "#E95800",
  },
  {
    text: "BFAM Partners",
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

const iconStyle = {
  width: "32px",
  height: "32px",
  layout: "fixed",
  placeholder: "blurred",
};

// a const that is a linkedin logo that links to my linkedin
const linkedin = (
  <a href="https://www.linkedin.com/in/nathanlandman/">
    <StaticImage
      src="../images/linkedin.png"
      alt="LinkedIn"
      style={iconStyle}
    />
  </a>
);

// a const that is a github logo that links to my github
const github = (
  <a href="https://www.github.com/landmann">
    <StaticImage src="../images/github.png" alt="Github" style={iconStyle} />
  </a>
);

const twitter = (
  <a href="https://www.twitter.com/ranicket">
    <StaticImage src="../images/twitter.jpeg" alt="Twitter" style={iconStyle} />
  </a>
);

// const to send an email to nlandmanc@gmail.com
const email = (
  <a href="mailto:nlandmanc@gmail.com">
    <StaticImage src="../images/email.webp" alt="Email" style={iconStyle} />
  </a>
);

// a const that is a div that contains the linkedin and github logos
const social = (
  <div style={rightAlign}>
    {email}
    {twitter}
    {linkedin}
    {github}
  </div>
);

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet>
        <meta name="icon" href="../../public/favicon.ico" />
      </Helmet>
      {social}
      <h1 style={headingStyles}>
        Hello there ????!
        <br />
        <span style={headingAccentStyles}>I'm Nathan Landman</span>
      </h1>
      {/* <p style={linkStyle}>Me in 10 seconds</p> */}
      <p style={paragraphStyles}>
        I'm a <code style={codeStyles}>Computer Scientist</code>, turned{" "}
        <code style={codeStyles}>Quant</code>, turned{" "}
        <code style={codeStyles}>Trader</code>, turned{" "}
        <code style={codeStyles}>Entrepreneur</code>; forever{" "}
        <code style={codeStyles}>Curious</code>.
      </p>
      <p style={paragraphStyles}>
        Chat with me about fitness and culture,
        <br />
        Intercellular and Intrahuman communication,
        <br />
        Technology and Tragedy.
        <br />
      </p>
      <ul style={listStyles}>
        {/* <li style={docLinkStyle}>
          <Link to="/ten-minute-nate" style={linkStyle}>
            Me in 10 minutes
          </Link>
        </li> */}
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

      <Link to="/web3-tinkering" style={linkStyle}>
        Web3 Tinkering
      </Link>
      <div
        style={{
          maxHeight: "50%",
          maxWidth: "50%",
          display: "flex",
          justifyContent: "flex",
          gap: "1rem",
        }}
      >
        {/* <img
          alt="lounge"
          src="https://static.thenounproject.com/png/148547-200.png"
        /> */}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => {
  return <title>Crib</title>;
};
