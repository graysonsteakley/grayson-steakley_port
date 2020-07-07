import React, {useState} from 'react'
import styled from 'styled-components'
import {BaseContainer, TextContainer, HeadingText, MediaContainer, TagText} from '../utils/Styles'
import SVGIcon from '../utils/SVGIcon'
import {IconContainer} from './NavBar'
import {NavLink} from 'react-router-dom'



const MainText = styled.h1`

    font-size: 4.5rem; 
    font-weight: bold;
    letter-spacing: 2px;
    color: lavender;
`;

const SubText = styled.h4`

    font-size: 1rem; 
    font-weight: bold;
    letter-spacing: 2px;
    color: darkgrey;
`;


const Arrow = styled.div`

    position: fixed;
    top: 83vh;
    left: 50%;
    width: 100px;
    @media screen and (max-width: 760px){
    left: 45%;
    }

`; 

const Sp = styled.span``;


function LandingPage() {
    
    const [animated, setAnimated] = useState(false);
    const [animated1, setAnimated1] = useState(false);
    const [animated2, setAnimated2] = useState(false);
    const [animated3, setAnimated3] = useState(false);
    const [animated4, setAnimated4] = useState(false);
    const [animated5, setAnimated5] = useState(false);
    const [animated6, setAnimated6] = useState(false);
    const [animated7, setAnimated7] = useState(true);
    const [animated8, setAnimated8] = useState(true);
    const [animated9, setAnimated9] = useState(true);
    const [animated10, setAnimated10] = useState(true);
    const [animated11, setAnimated11] = useState(true);
    const [animated12, setAnimated12] = useState(true);
    const [animated13, setAnimated13] = useState(true);
    const [animated14, setAnimated14] = useState(true);
    const [animated15, setAnimated15] = useState(true);
    const [animated16, setAnimated16] = useState(true);
    const [animated17, setAnimated17] = useState(true);
    const [animated18, setAnimated18] = useState(true);
    const [animated19, setAnimated19] = useState(true);
    const [animated20, setAnimated20] = useState(true);
    const [animated21, setAnimated21] = useState(true);
    const [animated22, setAnimated22] = useState(true);
    const [animated23, setAnimated23] = useState(true);
    const [animated24, setAnimated24] = useState(true);
    const [animated25, setAnimated25] = useState(true);
    const [animated26, setAnimated26] = useState(true);
    const [animated27, setAnimated27] = useState(true);
    const [animated28, setAnimated28] = useState(true);
    const [animated29, setAnimated29] = useState(true);

    return (
        <React.Fragment>
        <BaseContainer>
            <TextContainer className = "ml-5" >
                <TagText className="">
                    &lt;h1&gt;
                </TagText>
                <HeadingText className= "mt-2 pl-5 top-text" style={{fontSize: '4rem'}}>
                        <Sp onMouseEnter={() => setAnimated(() => true)}
                    onAnimationEnd={() => setAnimated(() => false)} className={animated ? 'l-w-1' : ''}>H</Sp>
                    
                    <Sp onMouseEnter={() => setAnimated2(() => true)}
                    onAnimationEnd={() => setAnimated2(() => false)} className={animated2 ? 'l-h-2' : ''}>i</Sp>
                    
                    <Sp onMouseEnter={() => setAnimated3(() => true)}
                    onAnimationEnd={() => setAnimated3(() => false)} className={animated3 ? 'l-h-3' : ''}>,</Sp>
                    
                </HeadingText>

                <HeadingText className= "text-left pl-5 mid-1-text" style={{fontSize: '4rem'}}>
                    <Sp onMouseEnter={() => setAnimated4(() => true)}
                    onAnimationEnd={() => setAnimated4(() => false)} className={animated4 ? 'l-h-4' : ''}>I</Sp>
                    
                    
                    <Sp onMouseEnter={() => setAnimated5(() => true)}
                    onAnimationEnd={() => setAnimated5(() => false)} className={animated5 ? 'l-w-4' : ''}>'</Sp>
                    
                    
                    <Sp onMouseEnter={() => setAnimated6(() => true)}
                    onAnimationEnd={() => setAnimated6(() => false)} className={animated6 ? 'l-h-5' : ''}>m &nbsp;</Sp>
                    

                    <Sp onMouseEnter={() => setAnimated7(() => true)}
                    onAnimationEnd={() => setAnimated7(() => false)} className={animated7 ? 'l-w-5' : ''}> G</Sp>
                    

                    <Sp onMouseEnter={() => setAnimated8(() => true)}
                    onAnimationEnd={() => setAnimated8(() => false)} className={animated8 ? 'l-h-6' : ''}>r</Sp>
                    

                    <Sp onMouseEnter={() => setAnimated9(() => true)}
                    onAnimationEnd={() => setAnimated9(() => false)} className={animated9 ? 'l-h-7' : ''}>a</Sp>
                    
                    
                    <Sp onMouseEnter={() => setAnimated10(() => true)}
                    onAnimationEnd={() => setAnimated10(() => false)} className={animated10 ? 'l-h-8' : ''}>y</Sp>
                    
                    
                    <Sp onMouseEnter={() => setAnimated11(() => true)}
                    onAnimationEnd={() => setAnimated11(() => false)} className={animated11 ? 'l-w-6' : ''}>s</Sp>
                    
                    
                    <Sp onMouseEnter={() => setAnimated12(() => true)}
                    onAnimationEnd={() => setAnimated12(() => false)} className={animated12 ? 'l-h-9' : ''}>o</Sp>
                    
                    
                    <Sp onMouseEnter={() => setAnimated13(() => true)}
                    onAnimationEnd={() => setAnimated13(() => false)} className={animated13 ? 'l-h-10' : ''}>n &nbsp;</Sp>
                    
             
              
                    <Sp onMouseEnter={() => setAnimated14(() => true)}
                    onAnimationEnd={() => setAnimated14(() => false)} className={animated14 ? 'l-w-7' : ''}>S</Sp>
                    
                
                 
                    <Sp onMouseEnter={() => setAnimated15(() => true)}
                    onAnimationEnd={() => setAnimated15(() => false)} className={animated15 ? 'l-h-11' : ''}>t</Sp>
                    
                
                    <Sp onMouseEnter={() => setAnimated16(() => true)}
                    onAnimationEnd={() => setAnimated16(() => false)} className={animated16 ? 'l-w-8' : ''}>e</Sp>
                
                <Sp onMouseEnter={() => setAnimated17(() => true)}
                    onAnimationEnd={() => setAnimated17(() => false)} className={animated17 ? 'l-w-9' : ''}>a</Sp>
                
                       
                <Sp onMouseEnter={() => setAnimated18(() => true)}
                    onAnimationEnd={() => setAnimated18(() => false)} className={animated18 ? 'l-h-12' : ''}>k</Sp>
                    
                
                  
                <Sp onMouseEnter={() => setAnimated19(() => true)}
                onAnimationEnd={() => setAnimated19(() => false)} className={animated19 ? 'l-h-13' : ''}>l</Sp>
                

                <Sp onMouseEnter={() => setAnimated20(() => true)}
                onAnimationEnd={() => setAnimated20(() => false)} className={animated20 ? 'l-w-10' : ''}>e</Sp>
                
                
                <Sp onMouseEnter={() => setAnimated21(() => true)}
                    onAnimationEnd={() => setAnimated21(() => false)} className={animated21 ? 'l-h-14' : ''}>y</Sp>
                  

                </HeadingText>
                <HeadingText className= "mb-2 pl-5" style={{fontSize: '4rem'}}>
                    Web Developer                 
                    <TagText className= "text-left">
                    &lt;/h1&gt;
                </TagText>
                </HeadingText>
                <TagText className= "text-left">
                    &lt;p&gt;
                </TagText>
                <SubText className = "btm-text pl-5">
                    Full Stack Web Developer / Designer / UI-UX specialist
                </SubText>
                <TagText className= "text-left">
                    &lt;/p&gt;
                </TagText>
            </TextContainer>
                
            <MediaContainer className = "">
                <SVGIcon className = "rotate-icon1" name="html" width={100} />
                <SVGIcon className = "rotate-icon2" name="css" width={100} fill={'#fff '} />
                <SVGIcon className = "rotate-icon3" name="js" width={100} fill={'#fff '} />
                <SVGIcon className = "rotate-icon4"  name="react" width={100} fill={'#fff '} />
            </MediaContainer>

        </BaseContainer>

        <Arrow className="arrow">
        <NavLink exact ={true} to="/projects" activeClassName = "active">
        

                <SubText className="ml-neg-2 hover-arrow">
                    Projects
                </SubText>
                <SVGIcon name="arrow" className="ml-2" width={120} fill={'lightblue'} />
            
         
        </NavLink>        
        </Arrow>
        </React.Fragment>
    )
}

export default LandingPage




