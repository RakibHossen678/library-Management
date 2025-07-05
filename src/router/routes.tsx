import { Route, Routes } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
