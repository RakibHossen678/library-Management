import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const links = [
    {
      name: "All Books",
      path: "/books",
    },
    {
      name: "Add Book",
      path: "/create-book",
    },
    {
      name: "Borrow Summary",
      path: "/borrow-summary",
    },
  ];

  const linkClass =
    "before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize";

  return (
    <nav className="flex items-center justify-between w-full relative bg-white rounded-full px-[10px] py-[20px] ">
      {/* Logo */}
      <Link
        to={"/"}
        className="text-4xl text-[#3B9DF8] font-medium  font-oswald"
      >
        EduShelf
      </Link>

      {/* Desktop Nav Links */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        {links.map((link) => (
          <Link to={link.path} key={link.name} className={linkClass}>
            {link.name}
          </Link>
        ))}
      </ul>

      {/* Action Buttons + Menu Icon */}
      <div className="items-center gap-[10px] flex">
        <button className="py-[7px] text-[1rem] px-[16px] text-white cursor-pointer rounded-full capitalize bg-[#3B9DF8] transition-all duration-300 sm:flex hidden">
          Sign in
        </button>
        <CiMenuFries
          className="text-[1.8rem] text-[#424242] cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      {/* Mobile Sidebar */}
      <aside
        className={`${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } md:hidden bg-white p-4 text-center absolute top-[65px] right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}
      >
        {/* Search Input */}
        <div className="relative mb-5">
          <input
            className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
            placeholder="Search..."
          />
          <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]" />
        </div>

        {/* Mobile Nav Links */}
        <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          {links.map((link) => (
            <Link to={link.path} key={link.name} className={linkClass}>
              {link.name}
            </Link>
          ))}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
