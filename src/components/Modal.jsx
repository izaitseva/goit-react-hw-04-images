import React from 'react'
export class Modal extends React.Component {

    onClickOverlay = () => {
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