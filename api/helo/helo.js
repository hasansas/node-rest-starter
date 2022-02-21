//

class Helo {
  constructor({ req, res }) {
    this.request = req;
    this.query = req.query;
    this.res = res
  }

  async index() {
    this.res.status(200).json({ message: 'Helo World' });
  }
}
export default ({ req, res }) => new Helo({ req, res });
