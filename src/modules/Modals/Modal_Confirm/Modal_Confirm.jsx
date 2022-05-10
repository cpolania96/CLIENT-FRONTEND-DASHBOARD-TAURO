import React, { useContext, useState } from 'react'
import Modal_Notification from '../Modal/Modal_Notification/Modal_Notification'
import { ProductsContext } from '../../Context/Products_Context'

function Modal_Confirm({ closeModal, isOpen }) {
    const { handlerDelete, useID } = useContext(ProductsContext)

    return (
        <>
            <Modal_Notification closeModal={closeModal} isOpen={isOpen} >
                <div className="modal-confirm">
                    <h4>¿Deseas borrar el producto?</h4>
                    <div className='buttons'>
                        <button id='btn-delete'
                            onClick={() => setTimeout(() => {
                                handlerDelete(useID)
                                closeModal()
                            }, 500)}>
                            Si, bórralo
                        </button>
                        <button>No lo borres</button>
                    </div>
                </div>
            </Modal_Notification>
        </>
    )
}

export default Modal_Confirm