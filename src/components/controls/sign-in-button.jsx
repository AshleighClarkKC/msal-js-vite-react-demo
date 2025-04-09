import { React } from 'react'
import { useMsal } from '@azure/msal-react'
import { loginRequestConfiguration } from '../../configuration/msal-config'
// Bootstrap Imports

export const SignInButton = () => {

    const { instance } = useMsal()

    const handleLoginHandshake = () => {

        instance.loginPopup(loginRequestConfiguration)
        .catch(err => { console.error(err) })

    }

    return (
        <button className='btn btn-dark' onClick={() => handleLoginHandshake()}>Login</button>
    )

}