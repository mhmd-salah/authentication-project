import Cookies from "universal-cookie";

class AuthTokenManager {
  static instance;
  #cookies;
  #tokenKey = "authToken";
  constructor() {
    this.#cookies = new Cookies();
  }
  static getInstance() {
    if (!AuthTokenManager.instance) {
      AuthTokenManager.instance = new AuthTokenManager();
    }
    return AuthTokenManager.instance;
  }

  setToken(token) {
    this.#cookies.set(this.#tokenKey, token, {
      path: "/",
      maxAge: 3600,
      sameSite: "strict",
    });
  }

  hasToken() {
    return !!this.getToken(this.#tokenKey) ;
  }

  getToken() {
    return this.#cookies.get(this.#tokenKey);
  }

  removeToken() {
    this.#cookies.remove(this.#tokenKey, { path: "/" });
  }
}

export default AuthTokenManager;
