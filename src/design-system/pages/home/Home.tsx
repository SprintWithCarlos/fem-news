import Navbar from "@/design-system/organisms/navbar/Navbar";
import Featured from "@/design-system/organisms/featured/Featured";
import Ranking from "@/design-system/organisms/ranking/Ranking";

import "./home.sass";
import { useState } from "react";

const Home: React.FC = () => {
  return (
    <div data-testid="home" className="home">
      <Navbar />
      <div className="wrapper">
        <Featured />
        <Ranking />
      </div>
    </div>
  );
};
export default Home;
