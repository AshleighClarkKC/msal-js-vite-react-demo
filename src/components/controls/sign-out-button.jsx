import { React } from 'react'
import { useMsal } from '@azure/msal-react'
import { logoutRequestConfiguration } from '../../configuration/msal-config'
// Bootstrap Imports

export const SignOutButton = () => {

    const { instance } = useMsal()

    const handleLogoutHandshake = () => {

        instance.logoutPopup(logoutRequestConfiguration)

    }

    return(
        <button className='btn btn-dark' onClick={() => handleLogoutHandshake()}>Logout</button>
    )

}