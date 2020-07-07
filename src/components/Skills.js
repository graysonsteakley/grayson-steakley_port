import React from 'react'
import {BaseContainer, SkillsContainer, WideContainer, HeadingText, SubText, TagText} from '../utils/Styles'
import styled from 'styled-components'

export default class Skills extends React.Component {
    
    state = {
        HoverText: false
    }

    handleMouseOver = (e, ind)=>{
        this.setState({
            HoverText: !this.state.HoverText
        });
    }
    
    addText = (skillsStr)=>{
        
    
        const skillsArr = skillsStr.split(' ');
        console.log(skillsArr);
        const skillsText = skillsArr.map((skill, ind) => {
            return (
                <div onMouseOver={(e, ind)=>this.handleMouseOver}
                className = {`${this.state.HoverText ? `light-text hover${ind}`: `main-text text-up-anim2 hover${ind}`}`}>
                <span style={{display: 'inline', cursor: 'pointer'}} key={ind} >
                    {skill}&nbsp;
                </span >
                </div>
            );
        });

        console.log(skillsText);
        return skillsText;

    }


    render(){
        return (
        <BaseContainer>

            <WideContainer>
            
            <HeadingText className="text-up-anim h1 font-weight-bold">
            <TagText className="lead text-left ml-4">&lt;h1&gt;&nbsp;</TagText>
                Skills
            <TagText className="lead text-left ml-2">&lt;/h1&gt;</TagText>    
            </HeadingText>

            <SkillsContainer className="py-5 px-5">       
            <TagText className="lead text-left mr-4">&lt;p&gt;</TagText>    
           {this.addText('JavaScript HTML5 CSS3 PHP Python jQuery React BootStrap SASS AJAX REST-APIs Axios Redux/Context-APIs MySQL WordPress (Custom-Theming) GitHub Adobe-Photoshop.')}
           <TagText className="lead text-left ml-4">&lt;/p&gt;</TagText>
           </SkillsContainer>

           <HeadingText className="text-up-anim h1 font-weight-bold">
            <TagText className="lead text-left ml-4">&lt;h1&gt;&nbsp;</TagText>
                Learning
            <TagText className="lead text-left ml-2">&lt;/h1&gt;</TagText>    
            </HeadingText>

           <SkillsContainer className="py-5 px-5">       
            <TagText className="lead text-left mr-4">&lt;p&gt;</TagText>    
           {this.addText('FireBase/NoSQL MongoDB Node.js MaterialUI')}
           <TagText className="lead text-left ml-4">&lt;/p&gt;</TagText>
           </SkillsContainer>

            </WideContainer>
        
        </BaseContainer>
        )
    }
}
