import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header_container">
            <h3>Heyyy this is</h3>
            <h1>Saher Afrin Khan</h1>
            <h3 className="text-light">An aspiring Software Engineer </h3>
            <CTA />
            <HeaderSocials />

            <div className="img" style={{ background: 'linear-gradient(black,transparent)', width: '21rem', height: '28rem', position: 'absolute', left: '50%', transform: 'translateX(-50%)', overflow:'hidden',padding: '5rem 1.5re 1.5rem 1.5rem'}}>
    <img src={ME} alt="meee" />
</div>

            <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
            </header>
    );
    }

export default Header;