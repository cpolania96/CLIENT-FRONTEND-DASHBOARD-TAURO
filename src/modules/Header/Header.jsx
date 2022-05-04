import React from 'react'
import Collapse_Button from '../Collapse_Button/Collapse_Button'
import Search from '../Search/Search'
import Tools from '../Tools/Tools'

function Header() {
    return (
        <header class="header">
            <Collapse_Button />
            <Search />
            <Tools />
        </header>
    )
}

export default Header