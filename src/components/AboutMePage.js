import React, {useState} from 'react'
import {BaseContainer, MediaContainer, TextContainer, HeadingText, SubText, TagText} from '../utils/Styles'
import styled from 'styled-components'

const Sp = styled.span`
display: inline-block;
font-size: 6rem;
color: inherit;
`;


function AboutMePage() {
    
    const [animated, setAnimated] = useState(true);
    const [animated1, setAnimated1] = useState(true);
    const [animated2, setAnimated2] = useState(true);
    const [animated3, setAnimated3] = useState(true);
    const [animated4, setAnimated4] = useState(true);
    const [animated5, setAnimated5] = useState(true);
    const [animated6, setAnimated6] = useState(true);
    const [animated7, setAnimated7] = useState(true);


    return (
        <BaseContainer>
            <TextContainer>
                <TagText className="lead text-left ml-4">&lt;h1&gt;</TagText>
                <HeadingText className = "text-left ml-5 text-up-anim2">
                    <Sp onMouseEnter = {()=>setAnimated(true)} 
                    onAnimationEnd={()=>setAnimated(false)} className={animated ? 'letter-up-anim' : ''}>a</Sp>
                  
                    <div className="sp-wrap l-up-2">
                        <Sp onMouseEnter = {()=>setAnimated2(true)} 
                        onAnimationEnd={()=>setAnimated2(false)} className={animated2 ? 'letter-up-anim' : ''}>b</Sp>
                    </div>
                    <div className="sp-wrap l-up-3">
                        <Sp onMouseEnter = {()=>setAnimated3(true)} 
                        onAnimationEnd={()=>setAnimated3(false)} className={animated3 ? 'letter-up-anim' : ''}>o</Sp>
                    </div>
                    <div className="sp-wrap l-up-4">
                        <Sp onMouseEnter = {()=>setAnimated4(true)}     
                        onAnimationEnd={()=>setAnimated4(false)} className={animated4 ? 'letter-up-anim' : ''}>u</Sp>
                    </div>
                    <div className="sp-wrap l-up-5">
                        <Sp onMouseEnter = {()=>setAnimated5(true)} 
                        onAnimationEnd={()=>setAnimated5(false)} className={animated5 ? 'letter-up-anim' : ''}>t&nbsp;</Sp>  
                    </div>
                    <div className="sp-wrap l-up-6">
                        <Sp onMouseEnter = {()=>setAnimated6(true)} 
                        onAnimationEnd={()=>setAnimated6(false)} className={animated6 ? 'letter-up-anim' : ''}>m</Sp>
                    </div>
                    <div className="sp-wrap l-up-7">
                        <Sp onMouseEnter = {()=>setAnimated7(true)} 
                        onAnimationEnd={()=>setAnimated7(false)} className={animated7 ? 'letter-up-anim' : ''}>e</Sp>  
                    </div>
                    <TagText className="lead text-left ml-4">&lt;/h1&gt;</TagText>
                </HeadingText>

                <TagText className="lead text-left ml-4">&lt;h3&gt;</TagText>
                {/* <view className="border border-bottom"/> */}
                <SubText className="text-left ml-5 showMe text-up-anim">
                    I'm a full stack developer and  UX/UI designer from Houston, Texas.
                    <TagText className="lead text-left ml-4">&lt;/h3&gt;</TagText>
                </SubText>

                <TagText className="lead text-left ml-4">&lt;p&gt;</TagText>
                <p className="text-left lead ml-5 showMe2 text-down-anim" style={{color: 'lavender'}}>I love turning complex graphical problems
                into simple, intuitive, and beautiful designs. I enjoy making designs
                and ideas into a reality for buisnesses, agencies, and private-clients.
                When I am not coding you can find me at the gym or on Discord chatting away.</p>
                <TagText className="lead text-left ml-4">&lt;/p&gt;</TagText>
            </TextContainer>
            <MediaContainer>
                <div className="img-container text-up-anim2 overflow">
                    <img src="./images/Profile-pic.jpg" alt="image of grayson" className="img-hover"/>
                </div>
            </MediaContainer>
        </BaseContainer>
    )
}

export default AboutMePage
