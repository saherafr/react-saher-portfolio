import React from "react";
import "./experience.css";
  
import { BiSolidCommentCheck } from "react-icons/bi";
const Experience = () => {
    return (
        <section id='experience'> 
            <h5>Skills I have</h5>
            <h2>Experience</h2>
            <div className="container experience__container">
                <div className="experience__language">
                    <h3>Programming Languages</h3>
                    
                    <div className="experience__content">
                        <article className="experience__details">
                        < BiSolidCommentCheck className="experience__details-icons
                        "/>
                        <div>
                        <h4>C</h4>
                        <small className="text-light">advanced</small>
                        </div>
                        </article>
                        <article className="experience__details">
                        < BiSolidCommentCheck className="experience__details-icons
                        "/>
                        <div>
                        <h4>C++</h4>
                        <small className="text-light">basic</small>
                        </div>
                        </article>
                        <article className="experience__details">

                        < BiSolidCommentCheck className="experience__details-icons
                        "/>
                        <div>
                        <h4>Javascript</h4>
                        <small className="text-light">intermediate</small>
                        </div>
                        </article>
                        <article className="experience__details">
                        < BiSolidCommentCheck className="experience__details-icons
                        "/>
                        <div>
                        <h4>Java</h4>
                        <small className="text-light">intermediate</small>
                        </div>
                        </article>
                        <article className="experience__details">
                        < BiSolidCommentCheck className="experience__details-icons
                        "/>
                        <div>
                        <h4>Python</h4>
                        <small className="text-light">advanced</small>
                        </div>
                        </article>
                        <article className="experience__details">
                        < BiSolidCommentCheck className="experience__details-icons
                        "/>
                        <div>
                        <h4>MY SQL</h4>
                        <small className="text-light">advanced</small>
                        </div>
                        </article>
                        </div>
                        </div>
                    <div className="experience__framework">
                    <h3>Frameworks</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                        < BiSolidCommentCheck className="experience__details-icons
                        "/>
                        <div>
                        <h4>React</h4>
                        <small className="text-light">intermediate</small>
                        </div>
                        </article>
                        <article className="experience__details">
                        < BiSolidCommentCheck className="experience__details-icons
                        "/>
                        <div>
                        <h4>Express.js</h4>
                        <small className="text-light">basic</small>
                        </div>
                        </article>
                        <article className="experience__details">
                        < BiSolidCommentCheck className="experience__details-icons
                        "/>
                        <div>
                        <h4>Node.js</h4>
                        <small className="text-light">intermediate</small>
                        </div>
                        </article>
                        <article className="experience__details">
                        < BiSolidCommentCheck className="experience__details-icons
                        "/>
                        <div>
                        <h4>Mongo DB</h4>
                        <small className="text-light">basic</small>
                        </div>
                        </article>
                        < BiSolidCommentCheck className="experience__details-icons
                        "/>
                        
                        
                        </div>
                        </div>
                    </div>

            

            </section>
    );
    };

export default Experience;