import React, { useState } from "react";
import { HomeInfo } from "../components";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
    </section>
  );
};

export default Home;
