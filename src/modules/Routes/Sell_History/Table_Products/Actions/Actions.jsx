import React, { useContext, useState } from 'react'
import Icon_edit from '../../../../../assets/icons/Icon_edit'
import { ProductsContext } from '../../../../Context/Products_Context'
import Label_Message from '../../../../Label_Message/Label_Message'
import Modal_Confirm from '../../../../Modals/Modal_Confirm/Modal_Confirm'
import { useModal } from '../../../../Hooks/useModal'
import Btn_Delete from './Btn_Delete/Btn_Delete'

function Actions() {
    const [isOpenModal, openModal, closeModal] = useModal()
    const [messageIsVisibleEdit, setMessageIsVisibleEdit] = useState(false)
    const [messageIsVisibleDelete, setMessageIsVisibleDelete] = useState(false)
    return (
        <>
            <div className="container-actions">
                <button className="action"
                    onMouseEnter={() => { setMessageIsVisibleEdit(true) }}
                    onMouseLeave={() => { setMessageIsVisibleEdit(false) }}><Icon_edit />
                    {/* <Label_Message message='Editar' /> */}
                    {messageIsVisibleEdit && <Label_Message message='Editar' />}
                </button>
                <Btn_Delete openModal={openModal}
                    messageIsVisibleDelete={messageIsVisibleDelete}
                    setMessageIsVisibleDelete={setMessageIsVisibleDelete} />
            </div>
            <Modal_Confirm closeModal={closeModal} isOpen={isOpenModal} />
        </>
    )
}

export default Actions