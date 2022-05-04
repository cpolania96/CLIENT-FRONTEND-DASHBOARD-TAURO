import React from 'react'
import Quick_Actions from '../Quick_Actions/Quick_Actions'

function Header_Aside({ title }) {
    return (
        <header>
            <Quick_Actions />
            <div class="navpoint">
                <h6>{title}</h6>
            </div>
        </header>
    )
}

export default Header_Aside