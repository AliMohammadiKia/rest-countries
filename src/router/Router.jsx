import { Routes, Route } from "react-router-dom";
import { Home, NotFound } from "../pages";
import { Navbar } from "../components";

export const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
