import React, {Component} from 'react'
import {BaseContainer, HeadingText, SocialIconWrapper} from '../utils/Styles'
import styled from 'styled-components'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import SVGIcon from '../utils/SVGIcon'
import axios from 'axios'

const MainContentWrapper = styled.div`

    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 760px){
      flex-direction: column;
      width: 100%;
    }

`;

const SocialMediaWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 100%;



    > svg path{
        fill: white;
    }

    >.icon-wrap{
        display: flex;

    }

    >.Contact-info{
        margin-top: 2rem;
        color: grey;
    }

`;



const SubHeader = styled.div`

    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: lavender;
    font-size: 3rem;
    font-weight: 200;
`;

class ContactMePage extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          text: "",
          name: "",
          email: ""
        };
    
        this.onHandleChangeName = this.onHandleChangeName.bind(this);
        this.onHandleChangeEmail = this.onHandleChangeEmail.bind(this);
        this.onHandleChangeText = this.onHandleChangeText.bind(this);

        this.onHandleSubmit = this.onHandleSubmit.bind(this);
      }



    onHandleChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }

    onHandleChangeText(e) {
        this.setState({
          text: e.target.value
        });
      }

    onHandleChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
     
      async onHandleSubmit(e) {
        e.preventDefault();


        const {name, email, text} = this.state;
        this.setState({
          email: '',
          name: '',
          text: ''
        }); 

        const form = await axios.post('/api/form', {
          name, email, text
        });
        

 

        }

    render(){
        return (
        <BaseContainer className="contact">
            <HeadingText className="text-center text-uppercase mb-5 text-up-anim2">CONTACT</HeadingText>
            <SubHeader className="text-center border-top text-up-anim">I'd <span style={{color: "pink"}}>&nbsp;♡&nbsp;</span> to Help!</SubHeader>
            <MainContentWrapper>
            
                <Form data-netlify="true" onSubmit={this.onHandleSubmit} className = "text-down-anim text-light login-form" >
                    <h1 className = "font-weight-bold">Business Inquiries</h1>
                    <h2 className = "text-center">And Additional Questions</h2>
                    <FormGroup>
                        <Label>Full Name</Label>
                        <Input type="text" onChange={this.onHandleChangeName} value={this.state.name} placeholder=""/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" onChange={this.onHandleChangeEmail} value={this.state.email} placeholder=""/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Message</Label>
                        <textarea name="Text1" cols="50" rows="5" type="text" style={{height:"10rem"}} onChange={this.onHandleChangeText} value={this.state.text} placeholder=""/>
                    </FormGroup>
                    <Button className="btn-lg btn-dark btn-block mt-5 btn-hover" type="submit">Submit</Button>
                </Form>

                <SocialMediaWrapper className="text-down-anim">
                <div className="icon-wrap">
                    <a href="https://github.com/graysonsteakley" target="_blank" className="link">
                    <SocialIconWrapper className="github">
                        <SVGIcon name="github" width={100} fill={'#fff'} />
                    </SocialIconWrapper>
                    </a>
                    <a href="https://instagram.com/" target="_blank" className="link">
                    <SocialIconWrapper className="Instagram">
                    <SVGIcon name="instagram" width={100} fill={'#fff'} />
                    </SocialIconWrapper>
                    </a>
                    <a href="https://twitter.com/" target="_blank" className="link">
                    <SocialIconWrapper className="Twitter">
                    <SVGIcon name="twitter" width={100} fill={'#fff'} />
                    </SocialIconWrapper>
                    </a>
                    <a href="https://www.linkedin.com/in/grayson-steakley-2aa9a0138/" target="_blank" className="link">
                    <SocialIconWrapper className="linkedin-contact">
                    <SVGIcon name="linkedin-contact" width={100} fill={'#fff'} />
                    </SocialIconWrapper>
                    </a>
                </div>
                <div className="Contact-info">
                Grayson Steakley 130 Fallow Buck Dr. Conroe, TX. 77384, USA
                832-557-7560
                grayson.steakley@gmail.com
                </div>

            </SocialMediaWrapper>

            </MainContentWrapper>
          
        </BaseContainer>
        );
    }
}

export default ContactMePage

