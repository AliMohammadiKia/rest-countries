import { Routes, Route } from "react-router-dom";
import { Home, NotFound, Country } from "../pages";
import { Navbar } from "../components";

export const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:cName" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
