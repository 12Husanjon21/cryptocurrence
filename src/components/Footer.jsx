import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer flex justify-center mt-10 bg-inherit border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <hr className=" h-[1px] slate" />
      <div className="container p-6 flex justify-between response">
        <Link to="/" className="text-2xl text-[#87CEEB] font-semibold">
          CRYPTOFOLIO
        </Link>
        <span className="text-slate-400 text-center">
          Built with Reactjs, Redux/toolkit & Tailwind Css
        </span>
        <p className="text-slate-400">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
