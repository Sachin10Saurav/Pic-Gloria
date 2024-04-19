import "./App.css";
import List from "./API/DataList";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import IndividualImageList from "./components/IndividualImageList";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [DataList] = useState(List);

  return (
    <>
      <ScrollToTop smooth />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home dataList={DataList} />} />
        <Route
          path="/:name"
          element={<IndividualImageList dataList={DataList} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
