import React, { Component } from 'react';
import  Header from '../header/Header';
import  Footer from '../footer/Footer';

class Shell extends React.Component {
    constructor(props) {
        super();
    }
    
    render() {
        return (
            <div>
                <Header />
                    {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Shell;