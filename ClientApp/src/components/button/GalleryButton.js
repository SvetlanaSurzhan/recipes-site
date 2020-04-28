import React from 'react';
import './GalleryButton.css';

class GalleryButton extends React.Component {
    render() {
        const recipeType = this.props.recipeType;
        const buttonName = recipeType ? recipeType.name : 'All';
        const typeId = recipeType ? recipeType.typeId : undefined;

        return (
            <div>
                <nav role="navigation" className="filter-menu">
                    <button onClick={(e) => this.props.onCLickHandler(typeId)}>
                        {buttonName}
                    </button>
                </nav>
            </div>
        );
    }
}
export default GalleryButton;
