/**
 * Users Controller
 */

'use strict';

class UsersController {
  constructor({ req, res }) {
    this.request = req;
    this.query = req.query;
    this.res = res;
    this.usersModel = db.users;
    this.userInfoModel = db.userInfo;
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

      // create user
      const _createUser = await this.createUser(_data);
      if (!_createUser.success) {
        return sendResponse.error(this.res, _createUser.errorCode, _createUser.error);
      }

      // attach user info
      const _attachUserInfo = await this.attachUserInfo(_createUser.data.id, _data);
      if (!_attachUserInfo.success) {
        return sendResponse.error(this.res, _attachUserInfo.errorCode, _attachUserInfo.error);
      }

      // success response
      return sendResponse.success(this.res, httpResponse.status.created, { id: _createUser.data.id })
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
      return this.usersModel
        .findAll({
          include: [{
            model: this.userInfoModel,
            attributes: ['dateOfBirth', 'placeOfBirth', 'gender']
          }],
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


  /*******************************************************
  *       Create User
  ********************************************************/
  async createUser(user) {
    try {
      return this.usersModel
        .create(user)
        .then((data) => {
          return { success: true, data: data }
        })
        .catch((error) => {
          return {
            success: false,
            errorCode: httpResponse.status.badRequest,
            error: error
          }
        });
    } catch (error) {
      return {
        success: false,
        errorCode: httpResponse.status.internalServerError,
        error: error
      }
    }
  }


  /*******************************************************
  *       Attach User Info
  ********************************************************/
  async attachUserInfo(userId, userData) {
    try {
      const _userData = {
        ...{ userId: userId },
        ...userData
      }
      return this.userInfoModel
        .create(_userData)
        .then((data) => {
          return { success: true, data: data }
        })
        .catch((error) => {
          return {
            success: false,
            errorCode: httpResponse.status.badRequest,
            error: error
          }
        });
    } catch (error) {
      return {
        success: false,
        errorCode: httpResponse.status.internalServerError,
        error: error
      }
    }
  }
}
export default ({ req, res }) => new UsersController({ req, res });
