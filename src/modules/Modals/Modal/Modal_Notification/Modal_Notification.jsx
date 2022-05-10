import React from 'react'

function Modal_Notification({ children, isOpen, closeModal }) {

    const isOpenNotif = () => {
        if (isOpen) {
            return 'is-open'
        }
    }
    return (
        <article className={`modal-notification ${isOpenNotif()}`} >
            <div className='modal-container-notification'>
                <button className='modal-close'
                    onClick={closeModal}
                >X</button>
                {children}
            </div>
        </article>
    )
}

export default Modal_Notification