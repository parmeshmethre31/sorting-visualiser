import React from 'react';
import './style.css';

const Footer = (props) => {
    return ( 
      <footer className = "Footer" >
        <section >
        Designed and built with { ' ' }
        <span className = "Footer__Heart" > & hearts; </span> by{' '} 
        <a href = "https://www.linkedin.com/in/parmesh-methre-ba8b88203/"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "Footer__Link" >
        Parmesh 
        </a>
        </section>

        <section className = "Footer__Items" > {
            /* <a
                      href="https://youtu.be/JFjvVmvC3pQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="Footer__Link"
                    >
                      Demo
                    </a> */
        } <
        a href = "https://github.com/parmeshmethre31"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "Footer__Link" >
        Code </a> </section> </footer>
    );
};

export default Footer;
