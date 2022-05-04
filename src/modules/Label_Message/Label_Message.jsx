import React from 'react'

function Label_Message({ message }) {
    return (
        <div class="container-label" id="container-label">
            <div class="container-triangle">
                <div class="triangle"></div>
            </div>
            <div class="label">
                <h6>{message}</h6>
            </div>
        </div>
    )
}

export default Label_Message