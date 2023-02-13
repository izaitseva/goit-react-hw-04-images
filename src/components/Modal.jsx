import React from 'react'
import PropTypes from 'prop-types';
export class Modal extends React.Component {

    onClickOverlay = (e) => {
        if (e.currentTarget !== e.target) return;

        this.props.hideModal()
    }

    handleKeydownPressed = (e) => {
        if (e.key === 'Escape') {
            this.props.hideModal()
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeydownPressed)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydownPressed)
    }

    render() {
        return (
            <div className="Overlay" onClick={this.onClickOverlay} >
                <div className="Modal">
                    <img src={this.props.largeImg} alt="" />
                    <p>Check modal</p>
                </div>
            </div>
        )
    }
}


Modal.propTypes = {
    hideModal: PropTypes.func.isRequired,
    largeImg: PropTypes.string.isRequired
}