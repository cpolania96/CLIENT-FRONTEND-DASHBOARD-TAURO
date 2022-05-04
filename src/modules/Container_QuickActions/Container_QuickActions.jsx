import React, { useState } from 'react'
import Label_Message from '../Label_Message/Label_Message'


function Container_QuickActions({ icon, labelMessage }) {
    const [messageIsVisible, setMessageIsVisible] = useState(false)
    const showMessage = () => {
        if (messageIsVisible === true) {
            return <Label_Message message={labelMessage} />
        }
    }

    return (
        <>
            <a href="help.html"
                onMouseEnter={() => { setMessageIsVisible(true) }}
                onMouseLeave={() => { setMessageIsVisible(false) }}
            >
                {icon}
            </a>
            {showMessage()}
        </>
    )
}

export default Container_QuickActions