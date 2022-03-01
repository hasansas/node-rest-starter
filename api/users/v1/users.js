//
'use strict';

class Users {
  constructor({ req, res }) {
    this.request = req;
    this.query = req.query;
    this.res = res
  }

  async index() {
    const _data = {
      name: 'John Wick',
      email: 'johnWick@domain.com',
    }

    // response
    const _response = jsonResponse.get({
      status: 'success',
      data: _data,
    });
    this.res.status(200).json(_response);
  }

  async login() {
    const _jwt = require('jsonwebtoken');
    const _jwtSecret = ENV.parsed.JWT_SECRET;

    if (
      this.request.body.username !== 'admin'
      && this.request.body.password !== 'password'
    ) {
      this.res.json(
        { message: 'Username and password invalid' }
      )
        .status(400);
    }

    const _payload = { name: this.request.body.username };
    const _token = _jwt.sign(_payload, _jwtSecret, { expiresIn: 60 * 2, algorithm: 'HS256' });

    // response
    this.res.status(200).json({ status: 'success', code: 200, message: 'OK', data: { token: _token } });
  }
}
export default ({ req, res }) => new Users({ req, res });
