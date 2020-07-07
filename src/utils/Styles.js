
import styled from 'styled-components'

export const BaseContainer = styled.div`

    width: 100%;
    min-height: 100vh;
    background-color: #333333;
    display: flex;
    justify-content: center; 
    align-items: center;  
    @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: space-around; 
    align-items: center;   
    }

    &.contact{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;


export const TextContainer = styled.div`

    width: 70%;
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

    width: 100%;
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
    font-family: 'Yellowtail', cursive;
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
    font-family: 'Montserrat', sans-serif;


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
    transition: all .2s;
    width: 8rem;
    height: 8rem;
    
    text-transform: uppercase;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    &:hover{
        background-color: #3B5988;
        transform: scale(1.1) translateY(-0.2rem);;
        cursor: pointer;
    }

    &:active{
       transform: scale(0.95) translateY(0.2rem);
    }

    &.Facebook:hover{
         background-color: #3B5988;
    }
    &.Facebook:active{
         background-color: #2a4063;
    }

    &.linkedin-contact:hover{
         background-color: #0E76A8;
    }
    &.linkedin-contact:active{
         background-color: #3B5988;
    }


    &.Twitter:hover{
         background-color: #1DA1F2;
    }

    &.Twitter:active{
         background-color: #188dd6;
    }
    &.Instagram:hover{
         background-color: #F56040;
    }
    &.Instagram:active{
         background-color: #d45437;
    }



    &:active{
        color: #B73239;
        background-color: orange;
        font-size: 2.2rem;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer;
        box-shadow: 0 1rem 5rem rgba(0,0,0,0.4);
    }

`;