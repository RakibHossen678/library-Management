import { Route, Routes } from "react-router";
import Mainlayout from "../layout/Mainlayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<div>This is home</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
