import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Link } from 'react-router-dom';
import { socialLinks } from "../constants";


import { me, line, bg } from '../assets/images/index'
import Typed from 'typed.js'; // Import the Typed library

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

// const Title = styled.h1`
//   font-size: 74px;
//   margin-bottom: 0; /* Add this line to remove bottom margin */
//   @media only screen and (max-width: 768px) {
//     text-align: center;
//   }
// `;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

// const Subtitle = styled.h1`
//   color: #da4ea2;
//   margin-bottom: 0; /* Add this line to remove bottom margin */
//   font-size: 28px;
// `;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const WhiteButton = styled.button`
  background-color: white;
  color: #da4ea2; /* Text color */
  font-weight: 500;
  width: 100px; 
  padding: 10px;
  border: 2px solid pink; /* Border color */
  border-radius: 5px;
  cursor: pointer;
  vertical-align: middle; 
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin: 0; /* Reset margin */
  padding: 0; /* Reset padding */
`;

const Subtitle = styled.h1`
  color: #da4ea2;
  font-family: 'Your Desired Font', sans-serif;
  font-size: 28px;
  margin: 0; /* Reset margin */
  padding: 0; /* Reset padding */
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Adjust the gap as needed */
`;


const Home = ({ currentStage }) => {
  useEffect(() => {
    // Initialize Typed instance
    let typed = new Typed('.typing', {
      strings: ["Backend Developer", "System Design Enthusiast", "Fast Learner"],
      loop: true,
      typeSpeed: 80,
      backSpeed: 40
    });

    // Cleanup Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <Section>
      <Container>
        <Left>
          <Title>Sravanti Kanchi</Title>
          <WhatWeDo>
            <Subtitle className="typing"></Subtitle>
          </WhatWeDo>
          <Desc>
            Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving complex and challenging real-world problems.
          </Desc>
          <div className='flex gap-3'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-8 h-8 object-contain'
              />
            </Link>
          ))}
        </div>
        <ButtonContainer>
  <Link to="/about">
    <Button style={{ width: '200px', height: '40px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '10px' }}>Learn More</Button>
  </Link>
  <WhiteButton style={{ width: '200px', height: '40px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '10px', verticalAlign: 'middle'  }}>
  <a aria-label="Open Sravanti's resume in a new tab" href="https://drive.google.com/file/d/1PNVwJcgacZvr7YQboBzSxWM46DZP8zxs/view?usp=sharing" target="_blank"
        class="waves-effect waves-dark teal-text"><span>See My Resume</span></a> 
    </WhiteButton>
</ButtonContainer>

        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src={me} />
        </Right>
      </Container>
    </Section>
  );
};

export default Home;
