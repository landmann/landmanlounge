import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import "./index.module.css";

const jobs = [
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

const bottomLinks = [
  {
    text: "About",
    url: "/about",
  },
  {
    text: "Projects",
    url: "/projects",
  },
  {
    text: "Blog",
    url: "/blog",
  },
];

const socialLinks = [
  {
    src: (
      <StaticImage
        src="../images/linkedin.png"
        alt="LinkedIn"
        className="w-7 h-7"
      />
    ),
    url: "https://www.linkedin.com/in/nathanlandman/",
  },
  {
    src: (
      <StaticImage
        src="../images/twitter.jpeg"
        alt="Twitter"
        className="w-7 h-7"
      />
    ),
    url: "https://www.twitter.com/ranicket",
  },
  {
    src: (
      <StaticImage src="../images/email.webp" alt="Email" className="w-7 h-7" />
    ),
    url: "mailto:nlandmanc@gmail.com",
  },
  {
    src: (
      <StaticImage
        src="../images/farcaster.png"
        alt="Farcaster"
        className="w-7 h-7"
      />
    ),
    url: "https://searchcaster.xyz/search?username=nathan",
  },
];

const socials = (
  <div className="flex justify-end pb-10 gap-2">
    {socialLinks.map((link) => (
      <a href={link.url}>{link.src}</a>
    ))}
  </div>
);

const IndexPage = () => {
  return (
    <main
      className="page"
      style={{
        padding: 96,
        fontFamily: "-apple-system, Roboto, sans-serif, serif",
      }}
    >
      <Helmet>
        <meta name="icon" href="../../public/favicon.ico" />
      </Helmet>
      {socials}
      <h1 className="text-3xl font-bold pb-10">
        Hello there 👋!
        <br className="pb-1" />
        <span className="text-accent">I'm Nathan Landman</span>
      </h1>
      {/* <p style={linkStyle}>Me in 10 seconds</p> */}
      <p className="pb-10 text-xl">
        I'm a{" "}
        <span className="text-[#8A6534] bg-[#FFF4DB]">Computer Scientist</span>,
        turned <code className="text-[#8A6534] bg-[#FFF4DB]">Quant</code> turned{" "}
        <code className="text-[#8A6534] bg-[#FFF4DB]">Trader</code>, turned{" "}
        <code className="text-[#8A6534] bg-[#FFF4DB]">Entrepreneur</code>;
        forever <code className="text-[#8A6534] bg-[#FFF4DB]">Curious</code>.
      </p>
      <p className="pb-10">
        Chat with me about fitness and culture,
        <br />
        Intercellular and Intrahuman communication,
        <br />
        Technology and Tragedy.
        <br />
      </p>
      <ul className="pb-10">
        {/* <li style={docLinkStyle}>
          <Link to="/ten-minute-nate" style={linkStyle}>
            Me in 10 minutes
          </Link>
        </li> */}
        {jobs.map((link) => (
          <li key={link.url} className="pb-10 max-w-560">
            <span>
              <a
                href={link.url}
                className="hover:underline text-links font-bold"
              >
                {link.text}
              </a>
              <p className="mt-2.5 mb-0 leading-0.25 text-ordinary font-light text-sm">
                {link.description}
              </p>
            </span>
          </li>
        ))}
      </ul>
      <div className="flex flex-row gap-4">
        {bottomLinks.map((link) => (
          <Link to={link.url} className="hover:underline text-links font-bold">
            {link.text}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => {
  return <title>Landman's Crib</title>;
};
