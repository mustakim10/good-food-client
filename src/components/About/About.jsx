import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='container d-md-flex align-items-center my-5 text-start '>
            <div>
                <h2 className='text-secondary'>Our Best Chefs</h2>
                <p>Our mission is to serve the community by offering a state-of-the-art facility with professional management, and by hosting local events, conventions, trade shows, meetings, and concerts generating significant economic impact for the City of Pembroke Pines as well as promoting education, entertainment and community pride, in a fiscally responsible manner. In addition, the City Center will support and encourage actions and programs that enhance the desirability and attractiveness of Pembroke Pines to neighboring communities.</p>
                <h3 className='text-secondary'>Responsibilities</h3>
                <ul>
                    <li>Set up the kitchen with cooking utensils and equipment, like knives, pans and kitchen scales</li>
                    <li>Study each recipe and gather all necessary ingredients</li>
                    <li>Cook food in a timely manner</li>
                    <li>Ensure appealing plate presentation</li>
                    <li>Supervise Cooks and assist as needed</li>
                </ul>
            </div>
            <div>
                <img className='about' src="https://t3.ftcdn.net/jpg/00/96/40/18/360_F_96401810_LO67BgmOuktElpee2xNF7hOVIbQC2nvD.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;