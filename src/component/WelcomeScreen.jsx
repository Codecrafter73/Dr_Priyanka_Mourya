import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaHeartbeat, FaStethoscope, FaUserMd } from 'react-icons/fa';
import doctorImage from '../assets/dr-priyanka/welcome_dr.jpg';

// Keyframes for animations
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const pulseGlow = keyframes`
  0%, 100% { text-shadow: 0 0 8px rgba(255,255,255,0.8); }
  50% { text-shadow: 0 0 18px rgba(255,255,255,1); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

// Styled Components
const WelcomeScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #8A1C1C, #D72638);
  color: #fff;
  text-align: center;
  overflow: hidden;
  padding: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 2rem;
`;

const Icon = styled.div`
  font-size: 3.5rem;
  animation: ${fadeInUp} 1.5s ease-in-out, ${pulseGlow} 2.5s infinite alternate;
  &:nth-child(1) { animation-delay: 0.2s; }
  &:nth-child(2) { animation-delay: 0.4s; }
  &:nth-child(3) { animation-delay: 0.6s; }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  animation: ${fadeInUp} 1.8s ease-in-out;
  animation-delay: 0.5s;
  text-transform: uppercase;
  letter-spacing: 2px;
  color:#ffffff;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin: 0.5rem 0 1.5rem 0;
  animation: ${fadeInUp} 2s ease-in-out;
  animation-delay: 1s;
  opacity: 0;
  animation-fill-mode: forwards;
  color:#ffffff;
`;

const Tagline = styled.p`
  font-size: 1.4rem;
  font-style: italic;
  color: #f3f3f3;
  animation: ${fadeInUp} 2.5s ease-in-out;
  animation-delay: 1.5s;
  opacity: 0;
  animation-fill-mode: forwards;
`;

const DoctorImage = styled.img`
  width: 250px;
  border-radius: 10%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 6%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${float} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    width: 200px;
    bottom: 8%;
  }
  @media (max-width: 480px) {
    width: 150px;
    bottom: 5%;
  }
`;

const WelcomeScreen = () => {
  return (
    <WelcomeScreenWrapper>
      <IconContainer>
        <Icon><FaHeartbeat /></Icon>
        <Icon><FaStethoscope /></Icon>
        <Icon><FaUserMd /></Icon>
      </IconContainer>
      <Title>Welcome to Dr. Priyanka Maurya</Title>
      <Subtitle>Best Homeopathic Doctor in Lucknow</Subtitle>
      <Tagline>"Caring for you with compassion and expertise"</Tagline>
      {/* <DoctorImage src={doctorImage} alt="Doctor" /> */}
    </WelcomeScreenWrapper>
  );
};

export default WelcomeScreen;
