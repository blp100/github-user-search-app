import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center text-tertiary text-h4">
      Challenge by&nbsp;
      <Link className="text-link" href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </Link>
      .
      <br />
      Coded by&nbsp;
      <Link className="text-link" href="https://po-cheng-yeh.vercel.app/" target="_blank">
        Po-Cheng Yeh
      </Link>
      .
    </footer>
  );
};

export default Footer;
