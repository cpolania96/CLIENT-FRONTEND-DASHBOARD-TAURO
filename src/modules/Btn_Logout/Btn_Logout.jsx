import React from 'react'
import Icon_logout from '../../assets/icons/Icon_logout'

function Btn_Logout() {
    return (
        <button class="btn-logout">
            <span>
                <Icon_logout />
            </span>
            Cerrar Sesión
        </button>
    )
}

export default Btn_Logout