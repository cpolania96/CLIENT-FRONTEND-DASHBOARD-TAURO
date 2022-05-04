import React, { useState } from 'react'
import Icon_notifications from '../../../../assets/icons/Icon_notifications'
import Notification_Expanded from '../Notification_Expanded/Notification_Expanded'

function Btn_Notification() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isExpandedNotif, setIsExpandedNotif] = useState()

    const showNotifications = () => {
        const notifExpanded = < Notification_Expanded setIsExpanded={setIsExpandedNotif} />
        if (isExpanded === true) { return notifExpanded }
        else if (isExpandedNotif === true) { return notifExpanded }
    }
    return (
        <>
            <div class="icon"
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}>
                <Icon_notifications />
                <span>
                    <p>1</p>
                </span>
            </div>
            {/* <Notification_Expanded /> */}
            {showNotifications()}
        </>
    )
}

export default Btn_Notification