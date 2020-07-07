import React from 'react'
import {BaseContainer, SkillsContainer, WideContainer, HeadingText, SubText, TagText} from '../utils/Styles'
import styled from 'styled-components'
import Project from './Project'

export default function Projects() {
    return (
       <BaseContainer>
        <div className="container">
        <div className="row mx-3 mt-5">
            <HeadingText className="text-center">
                Projects
            </HeadingText>
        </div>
            <div className="row mx-3 mt-5">
                <div className="card-deck">
                    
                <div className="card text-up-anim bg-dark text-white col-sm-6 col-12">
                        <a target = "_blank" href="https://merng-post-app.netlify.app/">
                        <div className="card-img-top overflow">
                            <img src="./images/Post.png" alt="Portfolio App" className="card-img-top img-hover"/>
                        </div>
                        </a>   
                        <div className="card-body">
                            <h4 className="card-title">Post Site</h4>
                            <p className="card-text">
                            MERNG Stack, React, MongoDB, GraphQL, Express, Node.js, Semantic-UI, Context API
                            </p>
                            <p className="card-text">
                            Built a functional full-stack post site that sends and receives data through an Apollo Graph-QL server to MongoDB. Users, posts, likes, and comments are stored in the database. Client side data is moved through a separate context Api store. Apollo brings the back-end and client side structures together.                  
                            </p>
                        </div>
                        
                        <div className="card-footer">
                            
                            <a target="_blank" href="https://merng-post-app.netlify.app/" className="btn btn-primary mr-5">
                                Live Demo
                            </a>
                            <a target="_blank" href="https://github.com/graysonsteakley/merng-post-app" className="btn btn-primary">
                            GitHub <i class="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    
                    <div className="card text-up-anim2 bg-dark text-white col-sm-6 col-12 overflow">
                        <a href="https://react-tommys-pizza.netlify.app/" target="_blank">
                        <div className="card-img-top overflow">
                        <img src="./images/Pizza.png" alt="Restaurant App" className="card-img-top img-hover"/>
                        </div>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">React Restaurant Site</h4>
                            <p className="card-text">
                            React.js, Styled-Components, ReactStrap, Bootstrap, Context API, React-Router
                            </p>
                            <p className="card-text">
                            Built a stylized pizza restaurant website that makes use of many custom CSS classes and animations, as well as modular React components. User Interface was examined to make a sleek and responsive design. a product API, stored into a separate Context API state. The Context API holds multiple functions that tabulates product pricing and which items are currently placed in the cart. 
                            </p>
                        </div>
                        <div className="card-footer">
                            <a target ="_blank" href="https://react-tommys-pizza.netlify.app/" className="btn btn-primary mr-5">
                                Live Demo
                            </a>
                            <a target="_blank" href="https://github.com/graysonsteakley/React-Tommys-Pizza" className="btn btn-primary">
                            GitHub <i class="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
        
            </div>
            <div className="row mx-3 mt-5">
                <div className="card-deck mb-5">
                <div className="card bg-dark text-white col-sm-6 col-12">
                        <a target="_blank" href="https://react-eccommerce-site.netlify.app/">
                            <div className="card-img-top overflow">
                                <img src="./images/eccomerce-md.png" alt="Eccomerce App" className="card-img-top img-hover"/>
                            </div>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">React Eccomerce Site</h4>
                            <p className="card-text">
                            React.js, Bootstrap, Context API, AJAX                            
                            </p>
                            <p className="card-text">
                            Built a functional Ecommerce Website that asynchronously retrieves data from a product API, then stores that data into a separate Context API state. The Context API holds multiple functions that tabulates product pricing and which items are currently placed in the cart.     </p>
                        </div>
                        <div className="card-footer">
                            
                            <a target="_blank" href="https://react-eccommerce-site.netlify.app/" className="btn btn-primary mr-5">
                                Live Demo
                            </a>
                            <a target="_blank" href="https://github.com/graysonsteakley/React-Async-Eccomerce/tree/master/src" className="btn btn-primary">
                            GitHub <i class="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    <div className="card bg-dark text-white col-sm-6 col-12">
                        <a href="/">
                        <div className="card-img-top overflow">
                            <img src="./images/Portfolio.png" alt="Portfolio App" className="card-img-top img-hover"/>
                        </div>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">Portfolio Site</h4>
                            <p className="card-text">
                            React.js, PHP, React-Router, Styled-Components, Functional Animations
                            </p>
                            <p className="card-text">
                            Built a multi page application with SVG / mobile scalable design. Includes a PHP email submission, and project showcase.                            
                            </p>
                        </div>
                        <div className="card-footer">
                            <a href="/" className="btn btn-primary mr-5">
                                Live Demo
                            </a>
                            <a href="https://github.com/graysonsteakley/grayson-steakley-portfolio" target="_blank" className="btn btn-primary">
                            GitHub <i class="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>


                </div>
        
            </div>
        </div>
        
       </BaseContainer>
    )
}
