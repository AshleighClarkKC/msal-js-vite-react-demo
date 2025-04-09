
export const msalConfiguration = {

    auth: {
        clientId: import.meta.env.VITE_CLIENT_ID,
        authority: `https://login.microsoftonline.com/${import.meta.env.VITE_TENANT_ID}`,
        redirectUri: import.meta.env.VITE_REDIRECT_URI
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false
    }

}

export const loginRequestConfiguration = {
    scopes: [
        "User.Read"
    ]
}

export const logoutRequestConfiguration = {
    postLogoutRedirectUri: import.meta.env.VITE_POST_LOGOUT_REDIRECT_URI
}

export const graphConfiguration = {
    profileEndpoint: import.meta.env.VITE_GRAPH_ME_ENDPOINT
}