import React, { Component } from 'react';
import './Gallery.css';
import Recipe from '../recipe/Recipe';
import posts from '../recipe/recipeData';
import GalleryButton from '../button/GalleryButton';
import recipeType from '../button/TypeData';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: posts,
            recipeType: recipeType
        };
    }
    render() {
        return (
            <div className="gallery-wrapper">
                <div className="button-items">
                {this.state.recipeType.map((type) => {
                        return (
                            <GalleryButton  typeOfRecipe={type}/>
                        );
                    })}
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