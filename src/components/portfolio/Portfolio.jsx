import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";



const data=[
    {
        id:1,
        img:IMG1,
        title:"Childhood Days",
        desc:"Childhood days a project created using the react hooks. This project holds some of our childhood memories which taught us some lessons in disguise of entertainment",
        github:"https://github.com/saherafr/childhood-days.git"
    },
    {
        id:2,
        img:IMG2,
        title:"Covid-19 Tracker",
        desc:"Covid-19 Tracker is a project created using the react hooks. This project shows the current status of covid-19 cases in India and also shows the status of covid-19 cases in each state of India",
        github:"https://github.com/saherafr/childhood-days.git"
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