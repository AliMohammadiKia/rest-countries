import { Routes, Route } from "react-router-dom";
import { Home, NotFound } from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
