import React, { Children } from 'react'
import Header_Aside from '../Header_Aside/Header_Aside'

function Aside({ children, title }) {
    return (
        <aside class="aside">
            <Header_Aside title={title} />
            <div class="container-content">
                {children}
            </div>
        </aside>
    )
}

export default Aside