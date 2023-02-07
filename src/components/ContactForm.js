import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Wrapper = styled.div`
  background: #000;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  background: #fff;
  height: 70%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  h3 {
    margin-left: 50px;
  }

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    padding: 10px 20px;
  }
`;

const Input = styled.input`
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
  width: 250px;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextArea = styled.textarea`
  margin-top: 10px;
  margin-left: 50px;
  min-width: 300px;
  width: 50px;
  max-width: 500px;
  max-height: 100px;
  min-height: 200px;
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
  border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
  border-image: none;
  border-radius: 6px 6px 6px 6px;
  border-style: none solid solid none;
  border-width: medium 1px 1px medium;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  color: #555555;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1em;
  line-height: 3em;
  padding: 5px 8px;
  transition: background-color 0.2s ease 0s;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

const SendButton = styled.button`
  background: ${({ primary }) => (primary ? "#000d1a" : "#CD853F")};
  white-space: nowrap;
  outline: none;
  border: none;
  margin-left: 50px;

  margin-top: 20px;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  font-size: ${({ big }) => (big ? "14px" : "20px")};
  border-radius: ${({ round }) => (round ? "50px" : "0px")};

  &:hover {
    transform: translateY(-2px);
  }
`;

const ContactForm = () => {
  const formRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_41gjaje",
        "template_fdwyzr6",
        formRef.current,
        "OnOfijp2NmT44CVKR"
      )
      .then(
        (result) => {
          alert("Your mail is sent!");
          console.log(result.text);
        },
        (error) => {
          alert("Oops... " + JSON.stringify(error));
        }
      );
  };

  return (
    <Wrapper>
      <Form ref={formRef} onSubmit={handleOnSubmit}>
        <h3> Full Name</h3>
        <Input
          placeholder="YOUR FULL NAME"
          type="text"
          name="user_name"
          required
        />
        <h3> Email </h3>
        <Input
          placeholder="YOUR EMAIL"
          type="email"
          name="user_email"
          required
        />
        <h3>Message </h3>
        <TextArea
          placeholder="YOUR MESSAGE"
          type="text"
          name="message"
          required
        />
        <SendButton>Send</SendButton>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
