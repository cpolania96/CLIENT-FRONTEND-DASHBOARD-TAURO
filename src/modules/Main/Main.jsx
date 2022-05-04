import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsContextProvider from '../Context/Products_Context'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Dashboard from '../Routes/Dashboard/Dashboard'
import Sell_History from '../Routes/Sell_History/Sell_History'

function Main() {
    return (
        <div class="container-principal">
            <BrowserRouter >
                <Navbar />
                <Header />
                <ProductsContextProvider>
                    <Routes>
                        <Route exact path='/dashboard' element={<Dashboard />}></Route>
                        <Route exact path='/ventas' element={<Sell_History />}></Route>
                    </Routes>
                </ProductsContextProvider>
            </BrowserRouter>
        </div>
    )
}

export default Main