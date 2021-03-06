import React from 'react';
import './Footer.css';
import instagram from './instagram.png';
import facebook from './facebook.png';
import linkedin from './linkedin.png';
import whatsapp from './whatsapp.png';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer-container">
                    <div className="contact-item">
                        <h5>Contact</h5>
                        <address>
                            Louisville, KY 40245<br />
                            E: svetlana.d.surzhan@gmail.com<br />
                            P: 502-291-6157
                        </address>
                    </div>
                    <div className="social-links-item">
                        <h5>Follow me</h5>
                        <ul className="links-img-items">
                            <li><img alt="instagram-icon" src={instagram} className="instagram-icon" /></li>
                            <li><img alt="facebook-icon" src={facebook} className="facebook-icon" /></li>
                            <li><img alt="linkedin-icon" src={linkedin} className="linkedin-icon" /></li>
                            <li><img alt="whatsapp-icon" src={whatsapp} className="whatsapp-icon" /></li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;