import React, { Component } from 'react';
import './Footer.css';
import instagram from './instagram.png';
import facebook from './facebook.png';
import linkedin from './linkedin.png';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer-container">
                    <div className="contact-item">
                        <h4>Contact</h4>
                        <address>
                            Louisville, KY 40245<br />
                            E: svetlana.d.surzhan@gmail.com<br />
                            P: 502-291-6157
                        </address>
                    </div>
                    <div className="social-links-item">
                        <h4>Follow Us</h4>
                        <ul className="links-img-items">
                            <li><img src={instagram} className="instagram-icon" /></li>
                            <li><img src={facebook} className="facebook-icon" /></li>
                            <li><img src={linkedin} className="linkedin-icon" /></li>
                        </ul>
                    </div>

                </footer>
            </div>
        );
    }
}

export default Footer;