import React from 'react'
import Item_Table from '../Item_Table/Item_Table'

function Item_Table_Container({ products, setUseID }) {
    return (
        products.map(prod => <Item_Table prod={prod} setUseID={setUseID} />)
    )
}

export default Item_Table_Container