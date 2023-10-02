import React from "react";
import "./contact.css";
import {AiTwotoneMail} from "react-icons/ai";

const Contact = () => {
    return (
        <section id='contact'> 
        <h5>Get in Touch</h5>
        <h2>Contact</h2>
        <div className='container contact__container'>
            <div className='contact__options'>
                <article className="contact__option">
                    <AiTwotoneMail />
                    <h4>Email</h4>
                    <h5>saherafrinkhan@gmail.com</h5>
                    <a href="mailto:saherafrinkhan@gmail.com>">Email Me</a>
                </article>
                </div>
                
                </div>
            </section>
    );
    };

export default Contact;