/**
 * Users Controller
 */

'use strict';

class UsersController {
  constructor({ req, res }) {
    this.request = req;
    this.query = req.query;
    this.res = res;
    this.users = db.Users;
  }

  /*******************************************************
  *       Register User
  ********************************************************/
  async register() {

    // validate request
    const errors = expressValidator.validationResult(this.request);
    if (!errors.isEmpty()) {
      const error = {
        errors: errors.array()
      }
      return sendResponse.error(this.res, httpResponse.status.badRequest, error);
    }

    // save data
    try {
      const _data = {
        name: this.request.body.name,
        email: this.request.body.email,
      }

      return this.users
        .create(_data)
        .then((data) => sendResponse.success(this.res, httpResponse.status.created, { id: data.id }))
        .catch((error) => sendResponse.error(this.res, httpResponse.status.badRequest, error));
    } catch (error) {
      return sendResponse.error(this.res, httpResponse.status.internalServerError, error);
    }
  }


  /*******************************************************
  *       Login User
  ********************************************************/
  async login() {

    // validate request
    const errors = expressValidator.validationResult(this.request);
    if (!errors.isEmpty()) {
      return sendResponse.error(this.res, httpResponse.status.badRequest, 'Bad Request', errors.array());
    }

    // check user credential
    if (this.request.body.email !== 'johndoe@domain.com' || this.request.body.password !== '123456') {
      const error = {
        message: 'Invalid email and password combination'
      }
      return sendResponse.error(this.res, httpResponse.status.badRequest, error)
    }

    // perfom login
    const _jwt = require('jsonwebtoken');
    const _jwtSecret = ENV.parsed.JWT_SECRET;
    const _payload = { email: this.request.body.email };
    const _token = _jwt.sign(_payload, _jwtSecret, { expiresIn: 525600, algorithm: 'HS256' });

    // response
    sendResponse.success(this.res, httpResponse.status.ok, { token: _token })
  }


  /*******************************************************
  *       Display a listing of the resource.
  ********************************************************/
  async index() {
    try {
      return this.users
        .findAll({
          include: [],
          order: [
            ['createdAt', 'DESC'],
          ],
        })
        .then((data) => sendResponse.success(this.res, httpResponse.status.ok, data))
        .catch((error) => {
          return sendResponse.error(this.res, httpResponse.status.internalServerError, error)
        });
    } catch (error) {
      return sendResponse.error(this.res, httpResponse.status.internalServerError, error);
    }
  }
}
export default ({ req, res }) => new UsersController({ req, res });
