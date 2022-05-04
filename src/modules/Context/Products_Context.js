import React, { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext([])

export const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [productsPOST, setProductsPOST] = useState({
        product_name: ' ',
        product_umed: ' ',
        product_category: ' ',
        product_thumbnail: ' ',
        product_weight: ' ',
        product_stock: ' ',
        product_price: ' ',
        product_description: ' '
    })

    const handlerChange = (e) => {
        setProducts({
            ...productsPOST,
            [e.target.name]: e.target.value
        })
    }

    const URL = 'http://localhost:9090'
    const RUTA = `${URL}/api/productos/getAll`

    useEffect(() => {
        fetch(RUTA)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
    }, [])

    const handlerSubmit = () => {
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productsPOST)
        }
        fetch(`${URL}/api/productos/save`, requestInit)
            .then(res => res.json())
            .then(res => console.log(res))

        setProductsPOST({
            product_name: ' ',
            product_umed: ' ',
            product_category: ' ',
            product_thumbnail: ' ',
            product_weight: ' ',
            product_stock: ' ',
            product_price: ' ',
            product_description: ' '
        })
    }

    return (
        <ProductsContext.Provider
            value={{
                products,
                handlerSubmit,
                handlerChange
            }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider