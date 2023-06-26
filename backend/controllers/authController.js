//Funções de lógica para tratar dados recebidos

import AuthService from "../services/authService.js";

export default class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  async verify(username, password, cb) {
    this.authService.verify(username, password, cb);
  }

  async signup(req, res, next) {
    this.authService.signup(req, res, next);
  }
}
