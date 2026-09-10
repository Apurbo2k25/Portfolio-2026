import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Left: Brand & Copyright */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">
            Apurbo <span className="text-emerald-600">Chakrobarty</span>
          </h3>
          <p className="text-gray-500 text-sm mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right: Social Logos */}
        <div className="flex items-center gap-8 text-gray-600">
          <a
            href="https://github.com/Apurbo2k25"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-emerald-600 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/apurbo-chakrabarty-378b58367?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-emerald-600 transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/share/199YDpujFz/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-emerald-600 transition text-2xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/its.mr.chakrobarty?stkn=eW5wc25lanpnYnYz&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-emerald-600 transition text-2xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
