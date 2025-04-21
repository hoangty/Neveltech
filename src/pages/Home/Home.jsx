import React from "react";

import Banner from '../../components/layout/Banner';
import GameList from '../../components/layout/GameList';
import Promotion from '../../components/layout/Promotion';
import Service from '../../components/layout/Service';

const Home = () => {
  return (
    <div className="bg-[#03193A] text-white overflow-hidden z-10">
      <Banner />
      <Service />
      <GameList />
      <Promotion />
    </div>
  )
}
    
export default Home;

