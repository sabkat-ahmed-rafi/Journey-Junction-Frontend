import React, { useContext } from "react";
import Slider from "./component/Slider";
import Spots from "./component/Spots";
import { AuthContext } from "./firebase/Authentication";
import Features from "./component/Features";
import Team from "./component/Team";
import { Bounce } from "react-awesome-reveal";
import Countries from "./component/Countries";




const Home = () => {

  const {loading} = useContext(AuthContext)

  return (
    <>
    		{loading && <span className="loading loading-bars loading-lg text-primary sticky top-[300px] left-[650px] z-10"></span>}
      <Slider></Slider>
      <section>
        <div className="space-y-2 py-6">
        <Bounce><h1 className="text-center font-bold text-3xl">Tourists Spots</h1></Bounce>
        <p className="text-center text-sm">Discover the wonders of our region through a myriad of <br /> breathtaking tourist spots that cater to every traveler's desire for adventure, relaxation, and cultural immersion.</p>
        </div>
        <Spots></Spots>
      </section>
      <Countries></Countries>
      <Features></Features>
      <Team></Team>
    </>
  );
};

export default Home;
