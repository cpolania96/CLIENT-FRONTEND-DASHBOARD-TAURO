import React from 'react'
import Notifications from './Notifications/Container_Notifications'
import Profile from './Profile/Profile'
import Settings from './Settings/Settings'

function Tools() {
    return (
        <ul class="container-tools">
            <Notifications />
            <Settings />
            <Profile />
        </ul>
    )
}

export default Tools