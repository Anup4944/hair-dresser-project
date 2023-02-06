import React from "react";
import styled from "styled-components";
import { cutNstyle, colourDt } from "../data/PricingData";

const Section = styled.section`
  background: #000d1a;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 2rem;
`;

const HairTitle = styled.h4`
  text-align: center;
  font-size: 2rem;
`;

const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const CutNStyle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0rem;
`;
const Colour = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UnOrderList = styled.ul`
  list-style: none;
`;
const OrderedList = styled.li`
  padding: 0.5rem;
`;

const PricingInfo = () => {
  return (
    <Section>
      <Container>
        <Title>PRICE LIST</Title>
        <FirstRow>
          <CutNStyle
            data-aos="fade-right"
            data-aos-durations="1200"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-anchor-placemnt="center bottom"
          >
            {" "}
            <HairTitle>Cut & Style</HairTitle>
            <InfoWrapper>
              {" "}
              {cutNstyle.map((item, index) => (
                <UnOrderList key={index}>
                  <OrderedList>
                    {item.style} {item.price}
                  </OrderedList>
                </UnOrderList>
              ))}
            </InfoWrapper>
          </CutNStyle>
          <Colour
            data-aos="fade-left"
            data-aos-durations="1200"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-anchor-placemnt="center bottom"
          >
            {" "}
            <HairTitle>Colour</HairTitle>
            <InfoWrapper>
              {colourDt.map((item, index) => (
                <UnOrderList key={index}>
                  <OrderedList>
                    {item.name} {item.price}
                  </OrderedList>
                </UnOrderList>
              ))}
            </InfoWrapper>
          </Colour>
        </FirstRow>
      </Container>
    </Section>
  );
};

export default PricingInfo;
