import React, { useContext } from 'react'
import { ProductsContext } from '../../../Context/Products_Context'
import Item_Table_Container from './Item_Table_Container.jsx/Item_Table_Container'

function Table_Products({ setSizeNoProducts, sizeNoProducts }) {
    const { products, setUseID } = useContext(ProductsContext)
    const renderProducts = () => {
        if (products.length === 0) {
            return (
                <>
                    <div className='no-products'>
                        <h2>La lista de productos esta vacía</h2>
                    </div>
                </>,
                setSizeNoProducts(true)
            )
        } else {
            return (
                <>
                    {<Item_Table_Container setUseID={setUseID} products={products} />}
                    {setSizeNoProducts(false)}
                </>
            )
        }
    }
    return (
        <>
            <table className={`${sizeNoProducts && `no-products-size`} .no-products `}>
                <tr className='title'>
                    <th className='input'><input type="checkbox" /></th>
                    <th>Nombre</th>
                    <th>Referencia</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
                {renderProducts()}
            </table>
        </>
    )

}
export default Table_Products