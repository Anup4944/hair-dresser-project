import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { IoMdArrowRoundForward } from "react-icons/io";
import HomeOne from "../images/img2.jpg";
import HomeTwo from "../images/img10.jpg";

const Section = styled.section`
  height: 100%;
  width: 100%;
  padding: 10rem calc((100vw - 1300px) / 2);
`;
const Conatiner = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`;
const Heading = styled.div`
  font-size: 3rem;
  padding: 2rem 1rem;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;
const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 100%;

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
`;
const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000d1a;
  width: 140px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 10px;
`;

const Listing = () => {
  return (
    <Section>
      <Conatiner>
        <Heading
          data-aos="fade-right"
          data-aos-durations="1000"
          data-aos-once="true"
          data-aos-anchor-placemnt="center bottom"
        >
          Experience our new way of cutting!{" "}
        </Heading>

        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-durations="1200"
            data-aos-once="true"
            data-aos-anchor-placemnt="center bottom"
          >
            <Image src={HomeOne} alt="home" />
            <h2>Good hair cut brings good vibes</h2>
            <InfoLink to="/gallery">
              <p>View more</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-once="true"
            data-aos-durations="1200"
            data-aos-anchor-placemnt="center bottom"
          >
            <Image
              src={HomeTwo}
              alt="home"
              css={`
                margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 8px;
                }
              `}
            />
            <h2>Open 7 days till 9PM</h2>
            <InfoLink to="/gallery">
              <p>View more</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
      </Conatiner>
    </Section>
  );
};

export default Listing;
