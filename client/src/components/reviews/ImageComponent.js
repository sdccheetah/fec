import React from "react";

class ImageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };

        this.handleShowModal = this.handleShowModal.bind(this);
    }

    handleShowModal(event) {
        this.setState({ isOpen: !this.state.isOpen }, () => {
            var modal = document.getElementById(this.props.id);
            if (this.state.isOpen) {
                modal.style.display = "block"
            } else {
                modal.style.display = "none"
            }
        });
    }

    render() {
        return (
            <div>
            <img
                className="review-photo"
                src={this.props.source}
                onClick={this.handleShowModal}
                alt="no image"
            />
            <div id={this.props.id} className="review-modal" onClick={this.handleShowModal}>
            
                <div className="review-modal-content">
                    <img src={this.props.source}></img>
                </div>
            
            </div>
            </div>
        );
    }
}

export default ImageComponent;