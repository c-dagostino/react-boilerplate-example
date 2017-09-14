import { createUserManager } from 'redux-oidc';

const userManagerConfig = {
    client_id: '413a2a10-c133-4740-8b77-9ad1b4ff6df2',
    redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
    response_type: 'token id_token',
    scope: 'openid qvue',
    authority: 'https://auth.navisdrive.com/core',
    silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
    automaticSilentRenew: true,
    filterProtocolClaims: true,
    loadUserInfo: true,
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
