import { React, useState } from 'react'
import Btn_Ico from './Btn_Ico.jsx/Btn_Ico'
import Container_Settings from './Container_Settings/Container_Settings'

function Settings() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <li className="settings" >
            <Btn_Ico setIsVisible={setIsVisible} isVisible={isVisible} />
            {/* {showContainer()} */}
        </li >
    )
}

export default Settings