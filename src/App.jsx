import { React } from 'react'
import './App.css'

import { BaseLayout } from './components/layouts/base-layout'
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react'
import { ProfileLayout } from './components/layouts/profile-layout'

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
            <div className="d-flex flex-row h-100 w-100">
              <div className="w-50 h-100 d-flex flex-column">
                <div className="w-100 h-50 my-3 d-flex flex-column justify-content-center align-items-center">
                  <h1>Profile Data:</h1>
                </div>
                <div className="w-100 h-50 d-flex flex-column justify-content-start align-items-center">
                  <ProfileLayout />
                </div>
              </div>
              <div className="w-50 h-100">
                <div className="w-100 h-100 my-3 d-flex flex-column justify-content-center align-items-center text-center px-3">
                  <h1>Sample Data:</h1>
                  <p>This area has no data so that you can inject your details and test an API of your own using MSAL for Token Authentication.</p>
                </div>
              </div>
            </div>
          </AuthenticatedTemplate>
        </div>
      </BaseLayout>
    </>
  )

}

