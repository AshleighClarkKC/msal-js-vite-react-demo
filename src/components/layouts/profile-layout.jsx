import { useMsal } from '@azure/msal-react'
import { React, useState } from 'react'
import { loginRequestConfiguration } from '../../configuration/msal-config'
import { callMsGraph } from '../../handlers/graph-request-handler'
import { ProfileFrame } from './profile-frame'

export const ProfileLayout = () => {

    const { instance, accounts } = useMsal()

    const [graphData, setGraphData] = useState(null)

    function requestProfileData() {

        instance.acquireTokenSilent({
            ...loginRequestConfiguration,
            account: accounts[0]
        })
            .then(
                (res) => {
                    callMsGraph(res.accessToken)
                        .then(
                            (ires) => setGraphData(ires)
                        )
                }
            )

    }

    return (
        <div className='d-flex flex-column align-items-center'>

            {graphData ? 
            (
                <ProfileFrame profileData={graphData} />
            ) :
                (
                    <>
                        <h1>Hello, {accounts[0].name}</h1>
                        <p>You have been logged in successfully. To get more information, please click on the button below.</p>
                        <button className='btn btn-dark' onClick={() => requestProfileData()}>Request Profile</button>
                    </>

                )}

        </div>
    )

}