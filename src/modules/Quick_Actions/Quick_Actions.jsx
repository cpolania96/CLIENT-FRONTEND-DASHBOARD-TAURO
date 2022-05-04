import React from 'react'
import Icon_add from '../../assets/icons/Icon_add'
import Icon_message from '../../assets/icons/Icon_message'
import Icon_headphones from '../../assets/icons/Icon_headphones'
import Container_QuickActions from '../Container_QuickActions/Container_QuickActions'

function Quick_Actions() {
    const quickActionsMessages = {
        addSell: 'Agregar venta',
        messages: 'Mensajes',
        help: 'Ayuda'
    }
    return (
        <div class="quickact">
            <h6>Acciones rapidas</h6>
            <ul>
                <li class="icon">
                    <Container_QuickActions icon={<Icon_add />} labelMessage={quickActionsMessages.addSell} />
                </li>
                <li class="icon">
                    <Container_QuickActions icon={<Icon_message />} labelMessage={quickActionsMessages.messages} />
                </li>
                <li class="icon">
                    <Container_QuickActions icon={<Icon_headphones />} labelMessage={quickActionsMessages.help} />
                </li>
            </ul>
        </div>
    )
}

export default Quick_Actions