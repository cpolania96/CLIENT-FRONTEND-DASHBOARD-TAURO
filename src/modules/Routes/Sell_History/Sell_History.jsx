import React from 'react'
import Aside from '../../Aside/Aside'
import Table_Products from './Table_Products/Table_Products'
import Footer from '../../Footer/Footer'
import { useModal } from '../../Hooks/useModal'
import Modal_AddVenta from '../../Modals/Modal_AddVenta'
function Sell_History() {
    const title = "Administrador de productos"
    const [isOpenModalProd, openModalProd, closeModalProd] = useModal(false)
    if (isOpenModalProd === true) { console.log('click'); }
    return (
        <>
            <Aside title={title}>
                <div className="sellActions">
                    <button className='add-product' onClick={() => openModalProd()}>Agregar Producto</button>
                    <button className='more-actions'>Más Acciones</button>
                </div>
                <div className='products-table'>
                    <Table_Products />
                    <Footer />
                </div>
                <Modal_AddVenta isOpen={isOpenModalProd} closeModal={closeModalProd} />
            </Aside>
        </>
    )
}

export default Sell_History