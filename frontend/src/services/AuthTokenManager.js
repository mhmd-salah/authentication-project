import Cookies from "universal-cookie";

class AuthTokenManager {
  #cookies;
  #tokenKey = "authToken";
  constructor() {
    if (AuthTokenManager.instance) {
      return AuthTokenManager.instance;
    }
    AuthTokenManager.instance = this;
    this.#cookies = new Cookies();
  }

  // methods
  setToken(token) {
    this.#cookies.set(this.#tokenKey, token, {
      path: "/",
      maxAge: 3600,
      sameSite: "strict",
    });
  }
  hasToken() {
    return !!this.getToken(this.#tokenKey);
  }

  getToken() {
    return this.#cookies.get(this.#tokenKey);
  }

  removeToken() {
    this.#cookies.remove(this.#tokenKey, { path: "/" });
  }

}

export default AuthTokenManager;
