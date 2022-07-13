import React from "react";
import {
  BaseContainer,
  SkillsContainer,
  WideContainer,
  HeadingText,
  TagText,
} from "../utils/Styles";

export default class Skills extends React.Component {
  state = {
    HoverText: false,
  };

  handleMouseOver = (e, ind) => {
    this.setState({
      HoverText: !this.state.HoverText,
    });
  };

  addText = (skillsStr) => {
    const skillsArr = skillsStr.split(",");
    const skillsText = skillsArr.map((skill, ind) => {
      return (
        <div
          onMouseOver={(e, ind) => this.handleMouseOver}
          className={`${
            this.state.HoverText
              ? `light-text hover${ind}`
              : `main-text text-up-anim2 hover${ind}`
          }`}
        >
          <span style={{ display: "inline", cursor: "pointer" }} key={ind}>
            {skill}&nbsp;
          </span>
        </div>
      );
    });
    return skillsText;
  };

  render() {
    return (
      <BaseContainer>
        <WideContainer>
          <HeadingText className='text-up-anim h1 font-weight-bold'>
            <TagText className='lead text-left ml-4'>&lt;h1&gt;&nbsp;</TagText>
            Skills
            <TagText className='lead text-left ml-2'>&lt;/h1&gt;</TagText>
          </HeadingText>

          <SkillsContainer className='py-5 px-5'>
            <div className='d-flex flex-wrap justify-content-center'>
              <TagText className='lead text-left mr-4'>&lt;p&gt;</TagText>
              {this.addText(
                "TypeScript, JavaScript, React, Next.js, HTML5, CSS3, Apollo GraphQL, jQuery, Plethra of UI libraries, AJAX, Axios, Redux, React Query, React Context API"
              )}
            </div>
            <div className='d-flex flex-wrap justify-content-center'>
              {this.addText(
                "Python, Flask, Django, SQL (PostgreSQL MySQL), Graphene GraphQL"
              )}
              <TagText className='lead text-left ml-4'>&lt;/p&gt;</TagText>
            </div>
          </SkillsContainer>

          <HeadingText className='text-up-anim h1 font-weight-bold'>
            <TagText className='lead text-left ml-4'>&lt;h1&gt;&nbsp;</TagText>
            Learning
            <TagText className='lead text-left ml-2'>&lt;/h1&gt;</TagText>
          </HeadingText>

          <SkillsContainer className='py-5 px-5'>
            <TagText className='lead text-left mr-4'>&lt;p&gt;</TagText>
            {this.addText("Cloud Systems, AWS, React_v.18 Rust")}
            <TagText className='lead text-left ml-4'>&lt;/p&gt;</TagText>
          </SkillsContainer>
        </WideContainer>
      </BaseContainer>
    );
  }
}
