import React from "react";

class ImageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };

        this.handleShowDialog = this.handleShowDialog.bind(this);
    }

    handleShowDialog(event) {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("cliked");
    }

    render() {
        return (
            <div>
            {!this.state.isOpen && (<img
                className="review-photo"
                src={this.props.source}
                onClick={this.handleShowDialog}
                alt="no image"
            />)}
            {this.state.isOpen && (
                <dialog
                className="review-modal-dialog"
                style={{ position: "absolute" }}
                open
                onClick={this.handleShowDialog}
                >
                <img
                    className="review-modal-image"
                    src={this.props.source}
                    onClick={this.handleShowDialog}
                    alt="no image"
                />
                </dialog>
            )}
            </div>
        );
    }
}

export default ImageComponent;
