import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: import.meta.env.VITE_KC_URL,
  realm: import.meta.env.VITE_KC_REALM,
  clientId: import.meta.env.VITE_KC_CLIENT_ID,
});

let init = false;

export const keycloakInstance = keycloak;

export async function login(cb?: (...args: unknown[]) => void) {
  const auth = !init
    ? await keycloak
        .init({
          onLoad: 'login-required',
          responseMode: 'query',
          checkLoginIframe: false,
        })
        .catch((e) => console.dir(e))
    : await keycloak.login().catch((e) => console.dir(e));

  if (auth) init = true;
  if (auth && cb) cb();
}

export async function logout() {
  await keycloak.logout();
}

export async function getToken() {
  await keycloak.updateToken(60).catch(() => login());
  return keycloak.token;
}

export function getUserId(): string | undefined {
  return keycloak.tokenParsed?.sub;
}

export function getUsername(): string | undefined {
  return keycloak.tokenParsed?.preferred_username;
}

export function getName(): string | undefined {
  return keycloak.tokenParsed?.name;
}

export function getEmail(): string | undefined {
  return keycloak.tokenParsed?.email;
}

export function getRole(): string[] | undefined {
  return keycloak.tokenParsed?.role ?? [];
}

export function isLoggedIn() {
  return !!keycloak.token;
}
