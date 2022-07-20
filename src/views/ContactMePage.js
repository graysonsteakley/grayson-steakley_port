import axios from "axios";
import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import {
  BaseContainer,
  HeadingText,
  MainContentWrapper,
  SocialIconWrapper,
  SocialMediaWrapper,
  SubHeader,
} from "../utils/Styles";
import { useInView } from "react-intersection-observer";
import SVGIcon from "../utils/SVGIcon";

const ContactMePage = () => {
  const [state, setState] = React.useState({
    text: "",
    name: "",
    email: "",
  });

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  function onHandleChange(e) {
    setState((prev) => {
      return {
        ...prev,
        email: e.target.value,
      };
    });
  }

  async function onHandleSubmit(e) {
    e.preventDefault();

    const { name, email, text } = state;

    const form = await axios.post("/api/form", {
      name,
      email,
      text,
    });

    setState({
      email: "",
      name: "",
      text: "",
    });

    console.log(form);
  }

  return (
    <BaseContainer className='contact' ref={ref}>
      <HeadingText
        className={`text-center text-uppercase mb-5 ${
          inView && "text-up-anim2"
        }`}
      >
        CONTACT
      </HeadingText>
      <SubHeader
        className={`text-center border-top ${inView && "text-up-anim"}`}
      >
        I'd <span style={{ color: "pink" }}>&nbsp;♡&nbsp;</span> to Help!
      </SubHeader>
      <MainContentWrapper>
        <Form
          data-netlify='true'
          onSubmit={onHandleSubmit}
          className={`${inView && "text-down-anim"} text-light login-form`}
        >
          <h1 className='font-weight-bold'>Business Inquiries</h1>
          <h2 className='text-center'>And Additional Questions</h2>
          <FormGroup>
            <Label>Full Name</Label>
            <Input
              type='text'
              onChange={(e) => onHandleChange(e)}
              value={state.name}
              placeholder=''
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type='email'
              onChange={(e) => onHandleChange(e)}
              value={state.email}
              placeholder=''
            />
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <textarea
              name='Text1'
              cols='50'
              rows='5'
              type='text'
              style={{ height: "10rem" }}
              onChange={(e) => onHandleChange(e)}
              value={state.text}
              placeholder=''
            />
          </FormGroup>
          <Button
            className='btn-lg btn-dark btn-block mt-5 btn-hover'
            type='submit'
          >
            Submit
          </Button>
        </Form>

        <SocialMediaWrapper className={`${inView && "text-down-anim"}`}>
          <div className='icon-wrap'>
            <a
              href='https://github.com/graysonsteakley'
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
              <SocialIconWrapper className='github'>
                <SVGIcon name='github' width={100} fill={"#fff"} />
              </SocialIconWrapper>
            </a>
            <a
              href='https://instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
              <SocialIconWrapper className='Instagram'>
                <SVGIcon name='instagram' width={100} fill={"#fff"} />
              </SocialIconWrapper>
            </a>
            <a
              href='https://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
              <SocialIconWrapper className='Twitter'>
                <SVGIcon name='twitter' width={100} fill={"#fff"} />
              </SocialIconWrapper>
            </a>
            <a
              href='https://www.linkedin.com/in/grayson-steakley-2aa9a0138/'
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
              <SocialIconWrapper className='linkedin-contact'>
                <SVGIcon name='linkedin-contact' width={100} fill={"#fff"} />
              </SocialIconWrapper>
            </a>
          </div>
          <div className='Contact-info'>
            Grayson Steakley 130 Fallow Buck Dr. Conroe, TX. 77384, USA
            832-557-7560 grayson.steakley@gmail.com
          </div>
        </SocialMediaWrapper>
      </MainContentWrapper>
    </BaseContainer>
  );
};

export default ContactMePage;
