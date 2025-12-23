import React from 'react'
import styled from 'styled-components'
const HeroSection = () => {
  return (
    <Hero>
        
    </Hero>
  )
}

export default HeroSection

const Hero = styled.div`
  position: relative;
  border-radius: 10px;
  height: 80vh;
  width: 90vw;
  margin: 0 auto;
  margin-top: calc(100vh - 95vh);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      rgba(175, 172, 172, 0.6),
      rgba(239, 240, 255, 0.6)
    );
    z-index: -1;
  }
`