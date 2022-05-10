import React from 'react'
import Icon_trash from '../../../../../../assets/icons/Icon_trash'
import Label_Message from '../../../../../Label_Message/Label_Message'
function Btn_Delete({ openModal, messageIsVisibleDelete, setMessageIsVisibleDelete }) {

    return (
        <button className="action"
            id='btn-delete'
            onMouseEnter={() => { setMessageIsVisibleDelete(true) }}
            onMouseLeave={() => { setMessageIsVisibleDelete(false) }}
            onClick={() => openModal()}
        >
            <Icon_trash />
            {messageIsVisibleDelete && <Label_Message message='Eliminar' />}
        </button>
    )
}

export default Btn_Delete