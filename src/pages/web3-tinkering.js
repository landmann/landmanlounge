import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const Web3 = require("web3");

const buttonStyle = {
  color: "#fff",
  backgroundColor: "#8953A8",
  border: "none",
  borderRadius: "4px",
  padding: "10px 20px",
  fontSize: "1.25rem",
  fontWeight: "bold",
  cursor: "pointer",
  marginBottom: "20px",
};

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

const links = [
  //   {
  //     text: "Rockit",
  //     url: "https://www.cyberport.hk/enewsletter/v170/1700008.html",
  //     description:
  //       "Rockit was my very first venture. A health and wellness marketplace for fitness professionals " +
  //       "to find and manage their clients. As a client, one could share an activity with a friend, " +
  //       "or a stranger in order to meet new people and save money.  At Rockit, I served as the co-CEO, " +
  //       "CPO, and early CTO.  We ended up shutting down as we scaled too quickly and our burn rate was too high. " +
  //       "I'd be lazy to blame it on COVID, and I get lazy. ",
  //     color: "#E95800",
  //   },
];

// read NFT from the matic blockchain
const readNFT = async () => {
  const Web3 = require("web3");
  const web3 = new Web3("https://rpc-mainnet.maticvigil.com");
  const contractAddress = "0x3CD266509D127d0Eac42f4474F57D0526804b44e";
  // include the version number of the NFT
  const tokenId = "34";
  const abi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: tokenId,
          type: "uint256",
        },
      ],
      name: "tokenURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const contract = new web3.eth.Contract(abi, contractAddress);
  const tokenURI = await contract.methods.tokenURI(1).call();
  // deconstruct the tokenURI to get the metadata
  const metadata = await fetch(tokenURI);
  const metadataJSON = await metadata.json();
  // convert metadataJSON to a string
  const metadataString = JSON.stringify(metadataJSON);
  return metadataString;
};

const backButton = (
  <div style={{ marginTop: "60px" }}>
    <Link to="/" style={linkStyle}>
      Back
    </Link>
  </div>
);

const IndexPage = () => {
  const [nft, setNft] = React.useState("");

  const getNFT = async () => {
    const nft = await readNFT();
    setNft(nft);
  };

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Tinkering With Web3
        <br />
        <span style={headingAccentStyles}>More coming soon!</span>
      </h1>
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
      <div style={{ marginBottom: "15px" }}>
        <a href="https://flow-nft-starter-sandy.vercel.app/" style={linkStyle}>
          Build your own NFT Collection with Flow (Portal by yours truly.)
        </a>
        <p style={descriptionStyle}>
          A Buildspace Tutorial from{"   "}
          <a
            href="https://buildspace.so/p/nfts-on-flow"
            style={{ color: "#8953A8" }}
          >
            @Buildspace.
          </a>
        </p>
      </div>
      {!nft ? (
        <button style={buttonStyle} onClick={getNFT}>
          Get Completion NFT Details
        </button>
      ) : (
        <button style={buttonStyle} onClick={() => setNft("")}>
          {" "}
          Hide Details
        </button>
      )}
      {nft && <p style={codeStyles}>{nft}</p>}
      {backButton}
    </main>
  );
};

export default IndexPage;

export const Head = () => {
  return <title>Crib</title>;
};
