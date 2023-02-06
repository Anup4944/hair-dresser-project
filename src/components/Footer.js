import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Section = styled.section`
  background: #000d1a;
  color: #fff;
  min-height: 600px;
  padding: 3rem calc((100vw - 1300px));
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;
const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Quotes = styled.div`
  flex: 1;
  padding: 2rem 0rem;

  h3 {
    font-size: clamp(2rem, 8vw, 5rem);
  }
`;
const FooterInfo = styled.div`
  padding: 3rem;
  line-height: 3;
  display: flex;
  flex-direction: column;

  h4 {
    width: 100px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;

const Iframe = styled.iframe`
  @media screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
const FooterBottom = styled.div`
  display: flex;
  padding: 2rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: #cd853f;
`;
const YouTube = styled(FaYoutube)`
  ${Icons}
`;
const FaceBook = styled(FaFacebook)`
  ${Icons}
`;
const Insta = styled(FaInstagram)`
  ${Icons}
`;
const Twitter = styled(FaTwitter)`
  ${Icons}
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quotes>
            <h3>
              Let's find <br /> your dream haircut{" "}
            </h3>
          </Quotes>
          <FooterInfo>
            <h4>Quick links</h4>
            <Link to="/">Home </Link>
            <Link to="/about">About </Link>
            <Link to="/pricing">Pricing </Link>
          </FooterInfo>
          <FooterInfo>
            <h4>Location</h4>
            <Link to="/">Shop 2/541 Princes Hwy, </Link>
            <Link to="/">Rockdale NSW 2216 </Link>

            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.5043507195815!2d151.1351770152125!3d-33.95387408063277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b9ff75656dfb%3A0xa1e2d89edf56e49f!2sShop%202%2F541%20Princes%20Hwy%2C%20Rockdale%20NSW%202216!5e0!3m2!1sen!2sau!4v1647825727571!5m2!1sen!2sau"
              width="600"
              height="450"
              loading="lazy"
            ></Iframe>
          </FooterInfo>
        </FooterTop>
        <FooterBottom>
          <SocialIcons>
            <a
              href="//www.youtube.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <YouTube />
            </a>

            <a
              href="//www.instagram.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <Insta />
            </a>

            <a
              href="//www.facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <FaceBook />
            </a>

            <a
              href="//www.twitter.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Twitter />
            </a>
          </SocialIcons>
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
