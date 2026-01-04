import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

// Pages - Clubs
import Alfa from "./pages/clubs/Alfa";
import CK from "./pages/clubs/CK";
import FS from "./pages/clubs/FS";
import Apex from "./pages/clubs/Apex";
import ABC from "./pages/clubs/ABC";

// Pages - Events
import Alfa1 from "./pages/events/Alfa1";
import Alfa2 from "./pages/events/Alfa2";
import CK1 from "./pages/events/CK1";
import CK2 from "./pages/events/CK2";
import FS1 from "./pages/events/FS1";
import FS2 from "./pages/events/FS2";
import Apex1 from "./pages/events/Apex1";
import Apex2 from "./pages/events/Apex2";
import ABC1 from "./pages/events/ABC1";
import ABC2 from "./pages/events/ABC2";
import { Club } from "lucide-react";

const App = () => {
  return (
    <main className="overflow-x-hidden text-white">
      {/* Gradient image */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradients/gradient (2).png"
        alt="Gradient-image"
      />

      {/* Blur effect */}
      <div
        className="h-0 w-[40rem] absolute top-[20%]
        right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg]
        -z-10"
      ></div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/clubs" element={<Club />} />


        {/* Clubs */}
        <Route path="/alfa" element={<Alfa />} />
        <Route path="/ck" element={<CK />} />
        <Route path="/fs" element={<FS />} />
        <Route path="/apex" element={<Apex />} />
        <Route path="/abc" element={<ABC />} />

        {/* Events */}
        <Route path="/alfa1" element={<Alfa1 />} />
        <Route path="/alfa2" element={<Alfa2 />} />
        <Route path="/ck1" element={<CK1 />} />
        <Route path="/ck2" element={<CK2 />} />
        <Route path="/fs1" element={<FS1 />} />
        <Route path="/fs2" element={<FS2 />} />
        <Route path="/apex1" element={<Apex1 />} />
        <Route path="/apex2" element={<Apex2 />} />
        <Route path="/abc1" element={<ABC1 />} />
        <Route path="/abc2" element={<ABC2 />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
