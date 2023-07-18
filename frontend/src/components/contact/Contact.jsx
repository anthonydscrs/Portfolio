import React, { useRef } from "react";
import styled from "styled-components";

export default function Contact() {
  const form = useRef();

  return (
    <StyledContactForm>
      <form ref={form}>
        <label htmlFor="Name">Name</label>
        <input type="text" name="user_name" />
        <label htmlFor="Email">Email</label>
        <input type="email" name="user_email" />
        <label htmlFor="Message">Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
}

// Styles
const StyledContactForm = styled.div`
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    width: 90%;
    max-width: 1200px;
    text-align: justify;
    margin-bottom: 100px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 20rem;
      min-height: 15rem;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-bottom: 0.5rem;
      margin-top: 1rem;
      color: #101820;
      font-size: 1.5rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #101820;
      color: #f2aa4c;
      font-size: 1rem;
      font-weight: bold;
      border: none;
    }
  }
`;
