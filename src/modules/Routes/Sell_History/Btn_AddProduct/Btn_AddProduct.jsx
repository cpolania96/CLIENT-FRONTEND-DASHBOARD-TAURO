import React from 'react'

function Btn_AddProduct({ openModalProd }) {
    return (
        <button className='add-product'
            onClick={() => openModalProd()}>
            Agregar Producto
        </button>
    )
}

export default Btn_AddProduct