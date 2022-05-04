import React from 'react'

function Menu_Item({ icon, label }) {
    return (
        <>
            <div className='item-list'>
                <span>
                    {icon}
                </span>
                <h2>
                    {label}
                </h2>
            </div>
        </>

    )
}

export default Menu_Item