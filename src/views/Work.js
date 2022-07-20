import React from "react";
import { useInView } from "react-intersection-observer";
import { BaseContainer, HeadingText } from "../utils/Styles";

export default function Work() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <BaseContainer ref={ref} inView={inView}>
      <div className='container'>
        <div className='row mx-3 mt-5'>
          <HeadingText className='text-center'>Past Work</HeadingText>
        </div>
        <div className='row mx-3 mt-5'>
          <div className='card-deck'>
            <div
              className={`card ${
                inView && "text-up-anim"
              } bg-dark text-white col-sm-6 col-12`}
            >
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.cisco.com/'
              >
                <div className='card-img-top overflow'>
                  <img
                    src='./images/cisco.jpg'
                    alt='Cisco Engineer'
                    className='card-img-top img-hover'
                  />
                </div>
              </a>
              <div className='card-body'>
                <h4 className='card-title'>
                  Cisco Software Consulting Engineer
                </h4>
                <p className='card-text'>React, TypeScript, Flask, GraphQL</p>
                <p className='card-text'>
                  Worked with the CXLT team of CX Labs at Cisco to create the UI
                  of their React app. Led the virtual machine user interface
                  development within the front facing application. Helped solve
                  complex issues and bugs such as the first recommendation of
                  available time-slot algorithm, created requested features, and
                  integrated graphical and functional optimizations. Assisted
                  with back-end flask and GraphQL database/micro-services
                  development. Practiced agile methodology for an efficient
                  pipeline. Maintained communication lines between the different
                  team members to push tickets to QA and production.
                </p>
              </div>
              <div className='card-footer'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.cisco.com/'
                  className='btn btn-primary mr-5'
                >
                  Company Site
                </a>
              </div>
            </div>

            <div
              className={`card ${
                inView && "text-up-anim2"
              } bg-dark text-white col-sm-6 col-12 overflow`}
            >
              <a
                href='https://www.shuup.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='card-img-top overflow'>
                  <img
                    src='./images/shuup.png'
                    alt='Shuup'
                    className='card-img-top img-hover'
                    style={{ maxWidth: "280px" }}
                  />
                </div>
              </a>
              <div className='card-body'>
                <h4 className='card-title'>
                  Shuup E-commerce Platform Development
                </h4>
                <p className='card-text'>
                  React, Jquery, Material-UI, Jinja, PostgreSQL, Python, Django,
                  Django-Rest
                </p>
                <p className='card-text'>
                  Develop React and Django based applications to create single,
                  multi vendor, and enterprise level e-commerce platforms.
                  Create wire frames and UX/UI responsive design, and implement
                  designs into React and Django applications. Help create
                  RESTful API's, or manage integration with external API's. Help
                  develop and extend proprietary python based software. Design
                  and develop the custom front marketplace plugins and
                  administrative portion of Shuup's software. Communicate with
                  Clients on a regular basis to layout design decisions.
                </p>
              </div>
              <div className='card-footer'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.shuup.com/'
                  className='btn btn-primary mr-5'
                >
                  Company Site
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/shuup/shuup'
                  className='btn btn-primary'
                >
                  Open Source Package
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row mx-3 mt-5'>
          <div className='card-deck mb-5'>
            <div className='card bg-dark text-white col-sm-6 col-12'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href=' https://thecanvas.nyc'
              >
                <div className='card-img-top overflow'>
                  <img
                    src='./images/canvas.png'
                    alt='canvas'
                    className='card-img-top img-hover'
                  />
                </div>
              </a>
              <div className='card-body'>
                <h4 className='card-title'>The Canvas</h4>
                <p className='card-text'>
                  Django, Jinja2, Square Space API, Jquery, Lodash, Firebase
                </p>
                <p className='card-text'>
                  Built a designer brand clothes marketplace, with a django back
                  end, and very customized front. Authorization through
                  firebase. Integrated square space blog through api calls.
                </p>
              </div>
              <div className='card-footer'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href=' https://thecanvas.nyc'
                  className='btn btn-primary mr-5'
                >
                  Live Site
                </a>
              </div>
            </div>

            <div className='card bg-dark text-white col-sm-6 col-12'>
              <a href='https://www.bookelevent.com/'>
                <div className='card-img-top overflow'>
                  <img
                    src='./images/bookelevent.png'
                    alt='Book Elevent'
                    className='card-img-top img-hover'
                  />
                </div>
              </a>
              <div className='card-body'>
                <h4 className='card-title'>bookelevent</h4>
                <p className='card-text'>
                  Python, Django, Shuup appointments, Google Calendar API,
                  Jinja2, jQuery, React Micro Components
                </p>
                <p className='card-text'>
                  Help use shuup appointments to release custom appointment
                  based product listings. Did all of the front-end work, and
                  helped create 3rd party integration with google calendars.
                  Created custom plugins for product curation and gallery
                  listings.
                </p>
              </div>
              <div className='card-footer'>
                <a
                  href='https://www.bookelevent.com/'
                  className='btn btn-primary mr-5'
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='row mx-3 mt-2'>
          <div className='card-deck mb-5'>
            <div className='card bg-dark text-white col-sm-6 col-12'>
              <a href='https://www.realtyonegroup.com/'>
                <div className='card-img-top overflow'>
                  <img
                    src='./images/realtyonegroup.png'
                    alt='realtyonegroup'
                    className='card-img-top img-hover'
                  />
                </div>
              </a>
              <div className='card-body'>
                <h4 className='card-title'>REALTYONEGROUP</h4>
                <p className='card-text'>
                  React, Material-UI, Python, Django, Docusign API, PostgreSQL
                </p>
                <p className='card-text'>
                  Developed the on-boarding React Application for
                  realtyonegroup's brokers and agents. Integration with
                  docusign. Responsible for the UI of the onboarding and admin
                  section of their process.
                </p>
              </div>
              <div className='card-footer'>
                <a
                  href='https://www.realtyonegroup.com/'
                  className='btn btn-primary mr-5'
                >
                  Company Site
                </a>
              </div>
            </div>

            <div className='card bg-dark text-white col-sm-6 col-12'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href=' https://givesome.org/'
              >
                <div className='card-img-top overflow'>
                  <img
                    src='./images/givesome.png'
                    alt='Givesome'
                    className='card-img-top img-hover'
                  />
                </div>
              </a>
              <div className='card-body'>
                <h4 className='card-title'>Givesome</h4>
                <p className='card-text'>
                  Python, Django, Shuup appointments, Google Calendar API,
                  Jinja2, jQuery, React Micro Components
                </p>
                <p className='card-text'>
                  Create Charity and Company based donation platform. Charities
                  or companies can sponsor projects, and provide "givecards" to
                  redeem a cash donation allowance to use on a charity to make a
                  donation with. Responsible for about half of the work of the
                  UI design, especially the modals, carousels, project tiles and
                  scripts.
                </p>
              </div>
              <div className='card-footer'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href=' https://givesome.org/'
                  className='btn btn-primary mr-5'
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  );
}
