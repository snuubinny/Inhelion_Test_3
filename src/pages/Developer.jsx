import React from "react";
import styled from "styled-components";
import DevelopersImage from "../img/Developers.png";
import DirectLinks from "../components/DirectLinks";

const FullScreenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Developer = () => {
  return (
    <FullScreenContainer>
      <BackgroundImage src={DevelopersImage} alt="Developers" />
      <ContentContainer>
        <DirectLinks />
      </ContentContainer>
    </FullScreenContainer>
  );
};

export default Developer;
