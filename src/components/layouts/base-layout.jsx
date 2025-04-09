import { React } from 'react'

import { useIsAuthenticated } from '@azure/msal-react'
import { SignInButton } from '../controls/sign-in-button'
import { SignOutButton } from '../controls/sign-out-button'

import './base-layout.css'

export const BaseLayout = (props) => {

    const isAuthenticated = useIsAuthenticated()

    return(
        <div className="h-100 w-100">
            <div className="navbar navbar-light bg-light">
            <div className='container-fluid m-2'>
                    <a className='navbar-brand' href="/">Kaleidocode</a>
                    { !isAuthenticated ? <SignInButton /> : <SignOutButton /> }
                </div>
            </div>
            <div className='container-fluid h-content w-100'>
                {props.children}
            </div>
        </div>
    )

}