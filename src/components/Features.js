import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import ImageNine from "../images/imgNine.jpg";

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
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
`;
const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const ColumnRight = styled.div`
  position: absolute;
  top: -8px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;

const Image = styled.img`
  height: 80%;
  width: 80%;
  object-fit: cover;
`;

const Features = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <ColumnLeft>
            <Content
              data-aos="fade-right"
              data-aos-durations="1200"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor-placemnt="center bottom"
            >
              <h1>OUR STORY</h1>
              <p>
                Our crew are absolutely committed to providing the best hair
                service in a warm and friendly environment and we're dedicated
                to education and training to ensure that our clients are being
                attended to by Sydney's best hairdressers. We don't like mottos
                and empty promises and we'll only say something if we can back
                it up, so our stylists and colourists; no matter how experienced
                are required to remain at the forefront of high fashion hair and
                the latest technology and techniques. This way you know that
                you're in safe hands and you'll be leaving our salon looking
                beautiful, healthy and reinvigorated.
              </p>
              <p>
                The characters are spread out evenly so that the reader's
                attention is focused on the layout of the text instead of its
                content.
              </p>
              <Button to="/contact"> Learn More </Button>
            </Content>
          </ColumnLeft>

          <ColumnRight>
            <Image
              src={ImageNine}
              data-aos="fade-left"
              data-aos-durations="1200"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor-placemnt="center bottom"
            />
          </ColumnRight>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Features;
