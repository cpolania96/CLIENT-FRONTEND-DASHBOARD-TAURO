import React from 'react'
import Actions from '../Actions/Actions'

function Item_Table({ prod, setUseID }) {
    return (
        <tr key={prod.id}>
            <td className='input'><input type="checkbox" /></td>
            <td>{prod.title}</td>
            <td>{prod.id}</td>
            <td>${prod.price}</td>
            <td>{prod.description}...</td>
            <td className='tab-actions'>
                <Actions prodId={prod.id} />
            </td>
            {setUseID(prod.id)}
        </tr>
    )
}

export default Item_Table