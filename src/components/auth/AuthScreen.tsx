/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Container, Title, Subtitle, Form, Button, Link, InputWithIcon, ForgotPassword } from "./AuthStyles";
import { GoogleIcon } from "../icons/google-icon";
import styled from "styled-components";
import { MailIcon } from "../icons/mail-icon";
import { LockIcon } from "../icons/lock-icon";
import type React from "react"; // Added import for React

const backgroundImage = "../img/SignIn.png";

interface AuthScreenProps {
  type: "login" | "signup";
  onSubmit: (email: string, password: string) => void;
  onSwitchAuth: () => void;
  error: string; // Adicionando a prop error do tipo string
}

const SignUpText = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-top: 16px;
`;

const SignUpLink = styled.span`
  color: #007bff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const AuthScreen: React.FC<AuthScreenProps> = ({ type, onSubmit, onSwitchAuth, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password); // Chama a função onSubmit passando email e senha
  };

  return (
    <Container>
      <Title>Audio</Title>
      <Subtitle>It's modular and designed to last</Subtitle>
      <Form onSubmit={handleSubmit}>
        <InputWithIcon>
          <div className="icon-wrapper">
            <MailIcon />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputWithIcon>
        <InputWithIcon>
          <div className="icon-wrapper">
            <LockIcon />
          </div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputWithIcon>
        {/* Forgot Password */}
        <ForgotPassword href="#">Forgot Password?</ForgotPassword>
        <Button type="submit">{type === "login" ? "Sign In" : "Sign Up"}</Button>
      </Form>
      <Link onClick={onSwitchAuth}>
        <GoogleIcon />
        {type === "login" ? "Sign in with Google" : "Sign up with Google"}
      </Link>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {type === "login" ? (
        <SignUpText>
          Don't have an account? <SignUpLink onClick={onSwitchAuth}>Sign Up here</SignUpLink>
        </SignUpText>
      ) : (
        <SignUpText>
          If you have an account? <SignUpLink onClick={onSwitchAuth}>Sign In here</SignUpLink>
        </SignUpText>
      )}
    </Container>
  );
};
