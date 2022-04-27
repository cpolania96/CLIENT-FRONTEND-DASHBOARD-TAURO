import React from 'react'
import Aside from '../Aside/Aside'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

function Main() {
    return (
        <div class="container-principal">
            <Navbar />
            <Header />
            <Aside />
        </div>
    )
}

export default Main