import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types';
export default function Modal({ hideModal, largeImg }) {

    const onClickOverlay = (e) => {
        if (e.currentTarget !== e.target) return;
        hideModal()
    }

    const handleKeydownPressed = useCallback(e => {
        console.log('hey');
        if (e.key === 'Escape') {
            hideModal()
        }
    })

    useEffect(() => {
        document.addEventListener('keydown', handleKeydownPressed)
        return () => {
            document.removeEventListener('keydown', handleKeydownPressed)
        }
    });

    return (
        <div className="Overlay" onClick={onClickOverlay} >
            <div className="Modal">
                <img src={largeImg} alt="" />
                <p>Check modal</p>
            </div>
        </div>
    )
}

Modal.propTypes = {
    hideModal: PropTypes.func.isRequired,
    largeImg: PropTypes.string.isRequired
}