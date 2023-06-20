import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center">
      Challenge by&nbsp;
      <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </Link>
      .
      <br />Coded by&nbsp;
      <Link href="https://po-cheng-yeh.vercel.app/" target="_blank">
        Po-Cheng Yeh
      </Link>
      .
    </footer>
  );
};

export default Footer;
