import React from 'react';
import  Header from '../header/Header';
import  Footer from '../footer/Footer';
import './Shell.css'

class Shell extends React.Component {
    constructor(props) {
        super();
    }
    
    render() {
        return (
            <div className="wrapper">
                <Header />
                    <div className="main-content">
                        {this.props.children}
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Shell;