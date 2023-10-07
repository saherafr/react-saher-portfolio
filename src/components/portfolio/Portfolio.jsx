import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";



const data=[
    {
        id:1,
        img:IMG1,
        title:"Portfolio",
        desc:"Developed a responsive and dynamic personal portfolio website using ReactJS to showcase projects, skills, and professional experiences.Implemented React Router for seamless navigation between pages and utilized React Hooks for state management and lifecycle events.",
        github:"https://github.com/saherafr/react-saher-portfolio.git"
    },
    {
        id:2,
        img:IMG2,
        title:"What deals today, Amazon?",
        desc:"Developed a robust API to scrape product details, reviews, and offers from Amazon, using Node.js, Express, and the ScraperAPI service. Deployed the service for real-time access, handling dynamic content challenges typical of e-commerce platforms.",
        github:"https://github.com/saherafr/amzn_scraper.git"
    },
    {       
        id:3,
        img:IMG3,
        title:"Covid-19 Tracker",
        desc:"Covid-19 Tracker is a project created using the react hooks. This project shows the current status of covid-19 cases in India and also shows the status of covid-19 cases in each state of India",
        github:"https://github.com/saherafr/childhood-days.git"
    }]


const Portfolio = () => {
    return (
        <section id='portfolio'> 
        <h5>My Recent Stuffs</h5>
        <h2>Projects</h2>
        <div className='portfolio__container'>
           {
                data.map(({id,img,title,desc,github})=>{
                    return(
                        <article key={id} className='portfolio__item'> 
                <div className='portfolio__item-img'>
                        <img src={img} alt={title} />
                </div>
                    <h3><b>{title}</b></h3>
                    <div className='portfolio__item-cta'>
                        <a href={github} className="btn btn-primary" target='_blank'>Github</a>
                        <p><i>{desc}</i></p>
                        
                        </div>

                </article>

                    )
           })
        
           
        }  
         </div>
            </section>
    );
    }

export default Portfolio;