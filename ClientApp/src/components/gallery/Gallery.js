import React, { Component } from 'react';
import './Gallery.css';
import Recipe from '../recipe/Recipe';
import posts from '../recipe/recipeData';
import GalleryButton from '../button/GalleryButton';

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
                <div className="button-items">
                    <GalleryButton/>
                </div>
                <div className="recipe-item">
                    {this.state.posts.map((cake) => {
                        return (
                            <Recipe recipe={cake}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Gallery;