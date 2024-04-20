// import React, { useContext } from "react";
// import { AppContext } from "./context";
// import { useGlobalContext } from "./context";

import Movies from "./Movies";
import Search from "./Search";

const Home = () => {
  // for useContext hook
  // const name = useContext(AppContext);

  // for using useGlobalContext cutom hook
  // const name = useGlobalContext();
  return (
    <>
      <Search />
      <Movies />
    </>
  );
};

export default Home;
