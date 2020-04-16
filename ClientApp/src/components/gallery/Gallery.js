import React, { Component } from 'react';
import './Gallery.css';
import Recipe from '../recipe/Recipe';
import posts from '../recipe/recipeData';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: posts
        };
    }
    render() {
        return (
            <div className="gallery-wrapper">
                {this.state.posts.map((cake) => {
                    return (
                        <Recipe recipe={cake}/>
                    );
                })}
            </div>
        );
    }
}

export default Gallery;