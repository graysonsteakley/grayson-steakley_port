import React, { useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import {
  BaseContainer,
  SkillsContainer,
  WideContainer,
  HeadingText,
  TagText,
} from "../utils/Styles";

const Skills = () => {
  const [state, setState] = useState(false);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const addText = React.useCallback(
    (skillsStr) => {
      const skillsArr = skillsStr.split(",");
      const skillsText = skillsArr.map((skill, ind) => {
        return (
          <div
            onMouseOver={(e, ind) => setState(!state)}
            className={`main-text ${inView && `text-up-anim2`} hover${ind}`}
          >
            <span style={{ display: "inline", cursor: "pointer" }} key={ind}>
              {skill}&nbsp;
            </span>
          </div>
        );
      });
      return skillsText;
    },
    [inView, setState, state]
  );

  return (
    <BaseContainer style={!InView ? { opacity: "0" } : {}}>
      <WideContainer ref={ref}>
        <HeadingText
          className={`${inView && `text-up-anim`} h1 font-weight-bold`}
        >
          <TagText className='lead text-left ml-4'>&lt;h1&gt;&nbsp;</TagText>
          Skills
          <TagText className='lead text-left ml-2'>&lt;/h1&gt;</TagText>
        </HeadingText>

        <SkillsContainer className='py-5 px-5'>
          <div className='d-flex flex-wrap justify-content-center'>
            <TagText className='lead text-left mr-4'>&lt;p&gt;</TagText>
            {addText(
              "TypeScript, JavaScript, React, Next.js, HTML5, CSS3, Apollo GraphQL, jQuery, Plethra of UI libraries, AJAX, Axios, Redux, React Query, React Context API"
            )}
          </div>
          <div className='d-flex flex-wrap justify-content-center'>
            {addText(
              "Python, Flask, Django, SQL (PostgreSQL MySQL), Graphene GraphQL"
            )}
            <TagText className='lead text-left ml-4'>&lt;/p&gt;</TagText>
          </div>
        </SkillsContainer>

        <HeadingText
          className={`${inView && `text-up-anim`} h1 font-weight-bold`}
        >
          <TagText className='lead text-left ml-4'>&lt;h1&gt;&nbsp;</TagText>
          Learning
          <TagText className='lead text-left ml-2'>&lt;/h1&gt;</TagText>
        </HeadingText>

        <SkillsContainer className='py-5 px-5'>
          <TagText className='lead text-left mr-4'>&lt;p&gt;</TagText>
          {addText("Cloud Systems, AWS, React_v.18 Rust")}
          <TagText className='lead text-left ml-4'>&lt;/p&gt;</TagText>
        </SkillsContainer>
      </WideContainer>
    </BaseContainer>
  );
};

export default Skills;
