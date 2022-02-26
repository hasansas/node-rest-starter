//
'use strict';

class Helo {
  constructor({ req, res }) {
    this.request = req;
    this.query = req.query;
    this.res = res
  }

  async index() {
    const _message = 'Helo World v1';

    // broadcast to connectent client
    IO.emit('broadcast', _message);

    // response
    this.res.status(200).json({ message: _message });
  }
}
export default ({ req, res }) => new Helo({ req, res });
