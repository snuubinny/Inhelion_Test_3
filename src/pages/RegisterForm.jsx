import React from "react";
import { RegisterMyInfo } from "../components/RegisterMyInfo";
import { RegisterInfo } from "../components/RegisterInfo";
import styled from "styled-components";
import lionImage from "../img/lion.png";

const RegisterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f8f6e9;
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 40px;
  font-weight: bold;
  margin-left: -350px;
  padding-top: 50px;
  padding-bottom: 20px;
`;

const Divider = styled.div`
  width: 80%;
  max-width: 800px;
  border-bottom: 2px solid #dddddd;
  margin: 20px 0;
`;

const ContextWrap = styled.p`
  text-align: left;
  font-size: 15px;
  margin-left: -430px;
`;

const LionIcon = styled.img`
  width: 50px;
  height: auto;
  margin-right: 10px;
`;
const RegisterButton = styled.button`
  padding: 3px;
  font-size: 15px;
  height: 40px;
  width: 120px;
  background-color: #ff832b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 680px;
  font-weight: bold;
  border: 1px solid #ffe3c8;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
  margin-bottom: 20px;
`;

const RegisterForm = () => {
  return (
    <>
      <RegisterWrap>
        <TextWrap>
          <LionIcon src={lionImage} />
          <span style={{ color: "#ff832b" }}>다! </span>했슈 계정 만들기
        </TextWrap>
        <ContextWrap>회원가입을 통해 다했슈 멤버가 되어보세요!</ContextWrap>
        <Divider />
      </RegisterWrap>
      <RegisterMyInfo />
      <RegisterInfo />
      <RegisterButton>회원가입</RegisterButton>
    </>
  );
};

export default RegisterForm;
