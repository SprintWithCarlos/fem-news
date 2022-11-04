import Navbar from "@/design-system/organisms/navbar/Navbar";
import Featured from "@/design-system/organisms/featured/Featured";
import Ranking from "@/design-system/organisms/ranking/Ranking";

import "./home.sass";
import { useEffect, useState } from "react";
import Loading from "@/design-system/atoms/loading/Loading";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log("Dom loaded");
    }, 1000);
  });
  return (
    <>
      {isLoading && <Loading />}
      <div data-testid="home" className="home">
        <Navbar />
        <div className="wrapper">
          <Featured />
          <Ranking />
        </div>
      </div>
    </>
  );
};
export default Home;
