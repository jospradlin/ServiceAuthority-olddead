export default {
  oidc: {
    clientId: '0oafbybdr9v95LoCp0h7',
    issuer: 'https://dev-654282.oktapreview.com/oauth2/default',
    redirectUri: window.location.origin + '/implicit/callback',
    scope: 'openid profile email',
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
