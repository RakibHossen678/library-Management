import { Route, Routes } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import BorrowSummery from "../pages/BorrowSummery";
import AddBooks from "../pages/AddBooks";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Home />} />
        <Route path="books" element={<AllBooks />} />
        <Route path="create-book" element={<AddBooks />} />
        <Route path="borrow-summary" element={<BorrowSummery />} />
      </Route>
    </Routes>
  );
};

export default Router;
