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
    const User = db.User;
    // broadcast to connectent client
    IO.emit('broadcast', _message);

    // response
    this.res.status(200).json({ message: _message });



    //   // return User
    //   //   .create({
    //   //     fullName: 'john wick',
    //   //     email: 'johnwick@aa.com',
    //   //   })
    //   //   .then((user) => this.res.status(201).send(user))
    //   //   .catch((error) => this.res.status(400).send(error));
    //   return User
    //     .findAll({
    //       include: [],
    //       order: [
    //         ['createdAt', 'DESC'],
    //       ],
    //     })
    //     .then((users) => this.res.status(200).send(users))
    //     .catch((error) => { this.res.status(400).send(error); });
  }
}
export default ({ req, res }) => new Helo({ req, res });
