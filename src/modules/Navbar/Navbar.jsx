import React from 'react'
import { Link } from 'react-router-dom'
import Icon_logo from '../../assets/icons/Icon_logo'
import Btn_Inicio from '../Btn_Inicio/Btn_Inicio'
import Menu_Item from './Menu_Item/Menu_Item'
import Icon_graphics from '../../assets/icons/Icon_graphics'
import Icon_message from '../../assets/icons/Icon_message'
import Icon_box from '../../assets/icons/Icon_box'
import Menu_title from './Menu_Title/Menu_title'
import Btn_Logout from '../Btn_Logout/Btn_Logout'

function Navbar() {
    const menuList = {
        title1: 'Histórico de ventas',
        title2: 'Mensajería',
        title3: 'Inventario',
        title4: 'Productos'
    }
    return (
        <section class="navbar">
            <div class="container-logo">
                <Icon_logo />
            </div>
            <div class="container-menu">
                <ul class="menu-items">

                    <Btn_Inicio />

                    <Menu_title title='VENTAS' />

                    <li>
                        <Link to='/ventas'>
                            <Menu_Item icon={<Icon_graphics />} label={menuList.title1} />
                        </Link>

                    </li>

                    <Menu_title title='LOGISTICA' />

                    <li>
                        <Link to='/mensajeria'>
                            <Menu_Item icon={<Icon_message />} label={menuList.title2} />
                        </Link>

                    </li>
                    <li>
                        <Link to='/inventario'>
                            <Menu_Item icon={<Icon_box />} label={menuList.title3} />
                        </Link>
                    </li>

                    <Menu_title title='GESTIÓN  DE PRODUCTOS' />
                    <li>
                        <Link to='/productos'>
                            <Menu_Item icon={<Icon_box />} label={menuList.title4} />
                        </Link>
                    </li>
                </ul>
            </div>
            <div class="container-logout">
                <Btn_Logout />
            </div>
        </section>
    )
}

export default Navbar