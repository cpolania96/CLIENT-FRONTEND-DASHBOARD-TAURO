import React, { useContext, useState } from 'react'
import Aside from '../../Aside/Aside'
import Table_Products from './Table_Products/Table_Products'
import Footer from '../../Footer/Footer'
import { useModal } from '../../Hooks/useModal'
import Modal_AddVenta from '../../Modals/Modal_AddVentas/Modal_AddVenta'
import { ProductsContext } from '../../Context/Products_Context'
import Spinner from '../../../assets/icons/Spinner/Spinner'


function Sell_History() {

    const title = "Administrador de productos"
    const [isOpenModalProd, openModalProd, closeModalProd] = useModal(false)
    const [sizeNoProducts, setSizeNoProducts] = useState(false)
    const { loading } = useContext(ProductsContext)

    return (
        <>
            <Aside title={title}>
                <div className='sellActions'>
                    {loading &&
                        <div className='loading-spinner'>
                            <Spinner />
                        </div>
                    }
                    <button className='add-product' onClick={() => openModalProd()}>Agregar Producto</button>
                    <button className='more-actions'>Más Acciones</button>
                </div>
                <div className='products-table'>
                    <Table_Products setSizeNoProducts={setSizeNoProducts} sizeNoProducts={sizeNoProducts} />
                    <Footer />
                </div>
                <Modal_AddVenta isOpen={isOpenModalProd} closeModal={closeModalProd} />
            </Aside>
        </>
    )
}

export default Sell_History