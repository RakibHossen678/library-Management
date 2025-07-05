import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const footerLinks = ["All Books", "Add Book", "Borrow Summary"];

  const iconClass =
    "text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] text-[#424242] transition-all duration-300";

  return (
    <footer className="bg-white w-full rounded-xl p-6 md:p-9 shadow-sm">
      <div className="flex justify-center flex-col items-center gap-6 w-full">
        {/* Links */}
        <div className="flex justify-center flex-wrap gap-6">
          {footerLinks.map((link) => (
            <p
              key={link}
              className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200"
            >
              {link}
            </p>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className={iconClass}>
            <CgFacebook />
          </a>
          <a href="#" className={iconClass}>
            <BsTwitter />
          </a>
          <a href="#" className={iconClass}>
            <BsInstagram />
          </a>
          <a href="#" className={iconClass}>
            <BsLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-4 w-full text-center">
          <p className="text-[0.8rem] sm:text-[0.9rem] text-gray-600">
            © 2024 EduShelf. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
