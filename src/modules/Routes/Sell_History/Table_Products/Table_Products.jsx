import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../../Context/Products_Context'

function Table_Products() {
    const { products } = useContext(ProductsContext)

    return (
        <>
            <table>
                <tr className='title'>
                    <th className='input'><input type="checkbox" /></th>
                    <th>Nombre</th>
                    <th>Referencia</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
                {products.map(prod =>
                    <tr>
                        <td className='input'><input type="checkbox" /></td>
                        <td>{prod.title}</td>
                        <td>{prod.id}</td>
                        <td>${prod.price}</td>
                        <td>{prod.description}...</td>
                        <td></td>
                    </tr>)}
            </table>
        </>
    )
}

export default Table_Products