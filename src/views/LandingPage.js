import React, { useState } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import {
  BaseContainer,
  TextContainer,
  HeadingText,
  MediaContainer,
  Layout,
  TagText,
} from "../utils/Styles";
import SVGIcon from "../utils/SVGIcon";
// import { NavLink } from "react-router-dom";
import AboutMePage from "./AboutMePage";
import ContactMePage from "./ContactMePage";
import Skills from "./Skills";
import Work from "./Work";
import { ArrowIndicator } from "../components/ArrowIndicator";
import { useInView } from "react-intersection-observer";

const SubText = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: darkgrey;
`;

// const Arrow = styled.div`
//   position: fixed;
//   top: 83vh;
//   left: 50%;
//   width: 100px;
//   @media screen and (max-width: 760px) {
//     left: 45%;
//   }
// `;

const to_obj = (row, prefix) => {
  const row_obj = {};
  [...row].forEach((letter, ind) => {
    const key = `${prefix}${ind}-${letter}`;
    row_obj[key] = false;
  });
  return row_obj;
};

const LandingPage = () => {
  const line_1 = "Hi,";
  const line_2 = "I'm Grayson Steakley";
  const line_3 = "Web Developer";

  const row_1_obj = to_obj(line_1, "line1");
  const row_2_obj = to_obj(line_2, "line2");
  const row_3_obj = to_obj(line_3, "line3");

  const [animatedRow1, setAnimatedRow1] = useState(row_1_obj);
  const [animatedRow2, setAnimatedRow2] = useState(row_2_obj);
  const [animatedRow3, setAnimatedRow3] = useState(row_3_obj);

  const Row1 = [...line_1].map((letter, ind) => {
    const classDirection = ind % 2 === 0 ? "h" : "w";
    const key = `line1-${letter}-${ind}`;
    return (
      <span
        key={key}
        onMouseEnter={() =>
          setAnimatedRow1((prev) => {
            return { ...prev, [key]: true };
          })
        }
        onAnimationEnd={() =>
          setAnimatedRow1((prev) => {
            return { ...prev, [key]: false };
          })
        }
        className={animatedRow1[key] ? `l-${classDirection}` : ""}
      >
        {letter ? letter : " "}
      </span>
    );
  });

  const Row2 = [...line_2].map((letter, ind) => {
    const classDirection = ind % 2 === 0 ? "h" : "w";
    const hasSpace = line_2.length > ind + 1 && line_2[ind + 1] === " ";
    const key = `line2-${letter}-${ind}`;
    return (
      <span
        key={key}
        onMouseEnter={() =>
          setAnimatedRow2((prev) => {
            return { ...prev, [key]: true };
          })
        }
        onAnimationEnd={() =>
          setAnimatedRow2((prev) => {
            return { ...prev, [key]: false };
          })
        }
        className={
          animatedRow2[key]
            ? `l-${classDirection} ${hasSpace ? "letterSpaceFix" : ""}`
            : `${hasSpace ? "letterSpaceFix" : ""}`
        }
      >
        {letter}
      </span>
    );
  });

  const Row3 = [...line_3].map((letter, ind) => {
    const classDirection = ind % 2 === 0 ? "h" : "w";
    const hasSpace = line_3.length > ind + 1 && line_3[ind + 1] === " ";
    const key = `line3-${letter}-${ind}`;
    return (
      <span
        key={key}
        onMouseEnter={() =>
          setAnimatedRow3((prev) => {
            return { ...prev, [key]: true };
          })
        }
        onAnimationEnd={() =>
          setAnimatedRow3((prev) => {
            return { ...prev, [key]: false };
          })
        }
        className={
          animatedRow3[key]
            ? `l-${classDirection} ${
                hasSpace
                  ? "letterSpaceFix"
                  : `${hasSpace ? "letterSpaceFix" : ""}`
              }`
            : `${hasSpace ? "letterSpaceFix" : ""}`
        }
      >
        {letter}
      </span>
    );
  });

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  return (
    <React.Fragment>
      <Layout>
        {inView && <ArrowIndicator />}
        <Element id="home" name="home">
          <BaseContainer inView={true}>
            <TextContainer className="ml-5">
              <TagText className="">&lt;h1&gt;</TagText>
              <HeadingText
                ref={ref}
                className="mt-2 pl-5 top-text text-left"
                style={{ fontSize: "4rem" }}
              >
                {Row1}
                <br />
                {Row2}
                <br />
              </HeadingText>
              <HeadingText className="mb-2 pl-5" style={{ fontSize: "4rem" }}>
                {Row3}
                <TagText className="text-left">&lt;/h1&gt;</TagText>
              </HeadingText>
              <TagText className="text-left">&lt;p&gt;</TagText>
              <SubText className="btm-text pl-5">
                Full Stack Web Developer / Technical Consultant
              </SubText>
              <TagText className="text-left">&lt;/p&gt;</TagText>
            </TextContainer>

            <MediaContainer className="">
              <SVGIcon className="rotate-icon1" name="html" width={100} />
              <SVGIcon
                className="rotate-icon2"
                name="css"
                width={100}
                fill={"#fff "}
              />
              <SVGIcon
                className="rotate-icon3"
                name="js"
                width={100}
                fill={"#fff "}
              />
              <SVGIcon
                className="rotate-icon4"
                name="react"
                width={100}
                fill={"#fff "}
              />
            </MediaContainer>
          </BaseContainer>
        </Element>
        <Element id="work" name="work">
          <Work />
        </Element>
        <Element id="about-me" name="about-me">
          <AboutMePage />
        </Element>
        <Element id="skills" name="skills">
          <Skills />
        </Element>
        <Element id="contact-me" name="contact-me">
          <ContactMePage />
        </Element>
      </Layout>
    </React.Fragment>
  );
};

export default LandingPage;
