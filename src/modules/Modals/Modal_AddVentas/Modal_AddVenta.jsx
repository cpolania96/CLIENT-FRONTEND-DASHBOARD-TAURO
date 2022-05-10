import React, { useContext } from 'react'
import { ProductsContext } from '../../Context/Products_Context'
import Modal from '../Modal/Modal'

function Modal_AddVenta({ isOpen, closeModal }) {
    const { handlerSubmit, handlerChange } = useContext(ProductsContext)
    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div className='add-sale'>
                <h1>Fórmulario de ingreso de productos</h1>
                <form onSubmit={handlerSubmit}>
                    <ul>
                        <li><h4>Nombre: </h4><input type="text" onChange={handlerChange} name='product_name' /></li>
                        <li><h4>Unidad de medida: </h4><input type="text" onChange={handlerChange} name='product_umed' /></li>
                        <li><h4>Categoría: </h4><input type="text" onChange={handlerChange} name='product_category' /></li>
                        <li><h4>Url Imagen: </h4><input type="text" onChange={handlerChange} name='product_thumbnail' /></li>
                        <li><h4>Stock: </h4><input type="text" onChange={handlerChange} name='product_stock' /></li>
                        <li><h4>Precio: </h4><input type="text" onChange={handlerChange} name='product_price' /></li>
                        <li><h4>Descripción: </h4><input type="text" onChange={handlerChange} name='product_description' /></li>
                        <li className='input'><input type="submit" value='Guardar' /></li>
                    </ul>
                </form>
            </div>
        </Modal>
    )
}

export default Modal_AddVenta