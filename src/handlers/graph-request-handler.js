import { graphConfiguration } from '../configuration/msal-config';

export async function callMsGraph(accessToken) {

    const headers = new Headers()
    const bearerValue = `Bearer ${accessToken}`

    headers.append('Authorization', bearerValue)
    const reqOptions = {
        method: 'GET',
        headers: headers
    }

    return fetch(
        graphConfiguration.profileEndpoint,
        reqOptions
    )
    .then(res => res.json())
    .catch(err => console.err(err))

}