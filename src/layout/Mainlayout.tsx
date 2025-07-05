import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Mainlayout = () => {
  return (
    <div className="max-w-7xl mx-auto font-inter">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayout;
