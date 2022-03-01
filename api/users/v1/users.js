//
'use strict';

// import jsonResponse from '../../../helpers/json_response';

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
    // const _data = {
    //   name: 'John Wick',
    //   email: 'johnWick@domain.com',
    // }
    // response
    this.res.status(200).json({ status: '_message', code: 200, message: 'OK', data: _data });
  }
}
export default ({ req, res }) => new Users({ req, res });

