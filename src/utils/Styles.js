import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const BaseContainer = styled.div`
  width: 93vw;
  min-height: 94vh;
  background-color: #333333;
  display: flex;
  visibility: ${(props) => (!props.inView ? "hidden" : "visible")};
  animation: ${(props) => (!props.inView ? fadeOut : fadeIn)} 1s linear;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    margin-top: 10vh;
  }

  &.contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContainer = styled.div`

    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media screen and (max-width: 800px) {
        width: 100%
        align-items: center;
        margin-top: -20rem;
    }

`;

export const WideContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SkillsContainer = styled.div`
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MediaContainer = styled.div`
    width: 30%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 800px) {
        margin-top: -50vh;
    }
}
`;

export const TagText = styled.span`
  animation: none;
  font-family: "Yellowtail", cursive;
  font-size: 2rem;
  color: #666666;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const HeadingText = styled.h1`
  font-size: 5rem;
  /* text-transform: lowercase; */
  letter-spacing: 2px;
  color: lavender;
  font-family: "Montserrat", sans-serif;
`;

export const SubText = styled.p`
  font-size: 2rem;
  letter-spacing: 2px;
  color: lavender;
`;

export const SocialIconWrapper = styled.div`
  padding: 0 1rem;
  font-size: 2.2rem;
  color: white;
  background-color: transparent;
  transition: all 0.2s;
  width: 8rem;
  height: 8rem;

  text-transform: uppercase;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #3b5988;
    transform: scale(1.1) translateY(-0.2rem);
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95) translateY(0.2rem);
  }

  &.Facebook:hover {
    background-color: #3b5988;
  }
  &.Facebook:active {
    background-color: #2a4063;
  }

  &.linkedin-contact:hover {
    background-color: #0e76a8;
  }
  &.linkedin-contact:active {
    background-color: #3b5988;
  }

  &.Twitter:hover {
    background-color: #1da1f2;
  }

  &.Twitter:active {
    background-color: #188dd6;
  }
  &.Instagram:hover {
    background-color: #f56040;
  }
  &.Instagram:active {
    background-color: #d45437;
  }

  &:active {
    color: #b73239;
    background-color: orange;
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.4);
  }
`;

export const MainContentWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;

  > svg path {
    fill: white;
  }

  > .icon-wrap {
    display: flex;
  }

  > .Contact-info {
    margin-top: 2rem;
    font-size: 1.5rem;
    color: grey;
  }
`;

export const SubHeader = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: lavender;
  font-size: 3rem;
  font-weight: 200;
`;
