import { React } from 'react'
import './App.css'

import { BaseLayout } from './components/layouts/base-layout'
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react'

export const App = () => {

  return (
    <>
      <BaseLayout>
        <div className='h-100 w-100 d-flex flex-column justify-content-center align-items-center'>
          <UnauthenticatedTemplate>
            <h1>Welcome to the Kaleidocode Entra ID Demo</h1>
            <h4 className='mb-3'>Please sign into the &ldquo;{import.meta.env.VITE_TENANT_NAME}&rdquo; tenant.</h4>
            <p>Made with &#10084; using Vite + React.</p>
          </UnauthenticatedTemplate>
          <AuthenticatedTemplate>
            
          </AuthenticatedTemplate>
        </div>
      </BaseLayout>
    </>
  )

}

