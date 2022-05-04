import React from 'react'
import Icon_home from '../../assets/icons/Icon_home'
import { Link } from 'react-router-dom'

function Btn_Inicio() {
    return (
        <div class="button-inicio">
            <Link to='/dashboard'>
                <Icon_home />
            </Link>
        </div>
    )
}

export default Btn_Inicio