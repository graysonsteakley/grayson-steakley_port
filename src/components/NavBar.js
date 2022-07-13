import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SVGIcon from "../utils/SVGIcon";

const NavContainer = styled.div`
  width: auto;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  background-color: #212121;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
    min-height: auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const ImgContainer = styled.div`
  width: 6rem;
  height: 6rem;
  padding: 2rem;
  margin: 2rem;
`;

export const IconContainer = styled.div`
  color: white;
  background-color: transparent;
  transition: all 0.2s;
  width: 4rem;
  height: 4rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  > svg path {
    transition: 0.1s all;
  }

  &:hover {
    background-color: rgba(0, 255, 255, 0.05);
    cursor: pointer;
  }
  &.linkedin {
    transition: all 0.2s;
  }
  &.linkedin:hover {
    background-color: #0e76a8;
  }

  &.linkedin:hover svg {
    transform: scale(1.2);
  }

  &:hover svg circle {
    transform: scale(1.1);
  }

  &.github:hover svg {
    transform: scale(1.5) translateX(0);
  }

  &:hover svg path {
    fill: cyan;
  }

  &:active svg path {
    fill: darkcyan;
    transform: scale(1);
  }

  &:active {
    color: #b73239;
    background-color: rgba(0, 255, 255, 0.03);
    cursor: pointer;
    box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.4);
  }
`;

const AppGroupContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

const SocialGroupContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #141414;

  @media screen and (max-width: 800px) {
    width: auto;
    height: 100%;

    justify-content: center;
    align-items: center;
  }
`;

function NavBar() {
  return (
    <NavContainer>
      <AppGroupContainer>
        <NavLink exact={true} to='/' activeClassName='active'>
          <ImgContainer className='logo'></ImgContainer>
        </NavLink>
        <NavLink exact={true} to='/' activeClassName='active'>
          <IconContainer className='ml-3 mr-3 mt-2 mb-2'>
            <SVGIcon name='home' width={50} fill={"#fff"} />
          </IconContainer>
        </NavLink>
        <NavLink exact={true} to='/projects' activeClassName='active'>
          <IconContainer className='ml-3 mr-3 mt-2 mb-2'>
            <SVGIcon name='folder' width={50} fill={"#fff"} />
            {/* <span>Covid-19 Update</span> */}
          </IconContainer>
        </NavLink>
        <NavLink exact={true} to='/about-me' activeClassName='active'>
          <IconContainer className='ml-3 mr-3 mt-2 mb-2'>
            <SVGIcon name='user' width={50} fill={"#fff"} />
            {/* <span>Covid-19 Update</span> */}
          </IconContainer>
        </NavLink>
        <NavLink exact={true} to='/skills' activeClassName='active'>
          <IconContainer className='ml-3 mr-3 mt-2 mb-2'>
            <SVGIcon name='cogwheel' width={50} fill={"#fff"} />
            {/* <span>Covid-19 Update</span> */}
          </IconContainer>
        </NavLink>
        <NavLink exact={true} to='/contact-me' activeClassName='active'>
          <IconContainer className='ml-3 mr-3 mt-2 mb-2'>
            <SVGIcon name='message' width={50} fill={"#fff"} />
            {/* <span>Contact Me</span> */}
          </IconContainer>
        </NavLink>
      </AppGroupContainer>
      <SocialGroupContainer>
        <a
          href='https://www.linkedin.com/in/grayson-steakley-2aa9a0138/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IconContainer className='ml-3 mr-3 mt-2 mb-2 linkedin'>
            <SVGIcon name='linkedin' width={100} fill={"#fff"} />
          </IconContainer>
        </a>
        <a
          href='https://github.com/graysonsteakley'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IconContainer className='github ml-3 mr-3 mt-2 mb-2'>
            <SVGIcon name='github' width={50} fill={"#55ACEE"} />
            {/* <span>Covid-19 Update</span> */}
          </IconContainer>
        </a>
      </SocialGroupContainer>
    </NavContainer>
  );
}

export default NavBar;
