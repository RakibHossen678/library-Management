import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const links = [
    { name: "All Books", path: "/books" },
    { name: "Add Book", path: "/create-book" },
    { name: "Borrow Summary", path: "/borrow-summary" },
  ];

  const linkClass =
    "before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize";

  const handleLinkClick = () => {
    setMobileSidebarOpen(false);
  };

  return (
    <nav className="flex items-center justify-between w-full relative bg-white rounded-full px-4 py-4 ">
      {/* Logo */}
      <Link to="/" className="text-3xl text-[#3B9DF8] font-semibold font-oswald">
        EduShelf
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-6 text-[1rem] text-[#424242]">
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className={linkClass}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Action Buttons + Mobile Menu Icon */}
      <div className="flex items-center gap-3">
        <button className="py-2 px-5 text-white rounded-full bg-[#3B9DF8] hidden sm:block text-sm">
          Sign in
        </button>
        <CiMenuFries
          className="text-[1.8rem] text-[#424242] cursor-pointer md:hidden"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      {/* Mobile Sidebar */}
      <aside
        className={`${
          mobileSidebarOpen ? "translate-x-0 opacity-100 z-50" : "translate-x-full opacity-0 z-[-1]"
        } transition-all duration-300 fixed top-[70px] right-0 w-full sm:w-[60%] bg-white p-5 shadow-lg rounded-bl-xl rounded-tl-xl md:hidden`}
      >
        

        {/* Mobile Nav Links */}
        <ul className="flex flex-col items-start gap-5 text-gray-700 text-base">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className={linkClass} onClick={handleLinkClick}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sign In button (mobile view) */}
        <button className="mt-6 w-full py-2 px-4 text-white rounded-full bg-[#3B9DF8] block sm:hidden">
          Sign in
        </button>
      </aside>
    </nav>
  );
};

export default Navbar;
