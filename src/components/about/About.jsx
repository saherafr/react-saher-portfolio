import React from "react";
import "./about.css";
import ME from "../../assets/me-about.JPG";
import {FaAward} from "react-icons/fa";
import {IoSchool} from "react-icons/io5";
import {BsFolderCheck} from "react-icons/bs";
const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me-image">
                    <img src={ME} alt="About Image"/>

                </div>
                <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className="about_icon"/>
                        <h5>Experience</h5>
                        <small>Striving to get one</small>
                    </article>
                    <article className="about__card">
                        <IoSchool className="about_icon"/>
                        <h5>Education</h5>
                        <small>University of ALberta</small>
                    </article>
                    <article className="about__card">
                        <BsFolderCheck className="about_icon"/>
                        <h5>Projects</h5>
                        <small>3 completed</small>
                    </article>
                </div>
                <p>Hii!.This is Saher Afrin Khan currently pursuing a Bachelor's degree in Computing Science. I am trying to dive more into MERN stacks at this moment.
                    I was one of those who started this degree thinking only about salary packages. Had a soft corner for mathematics since childhood though.
                    But I became a fond of programming when I actually started learning algorithms and scribbing on pen & paper.
                    I decided to learn teck stacks on my own. And I am still on process. I guess this is something that I have to stick life long nevermind.
                    To be very honest nothing ever gave me such adrenaline rush as solving a problem or debugging a code after scratching my head for days.
                    So I am here to learn and explore more and scratch my head more and more.
                    </p>
                    <a href="#contact" className="btn btn-primary">Coffee & Chat</a>
                </div>
                </div>
        </section>
    );
    };

export default About;