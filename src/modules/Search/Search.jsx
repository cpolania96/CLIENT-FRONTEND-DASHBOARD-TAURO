import React from 'react'
import Icon_search from '../../assets/icons/Icon_search'

function Search() {
    return (
        <div class="header-search">
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
                <span>
                    <Icon_search />
                </span>
                <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </div>
    )
}

export default Search