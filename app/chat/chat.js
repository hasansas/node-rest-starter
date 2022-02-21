class Chat {
  constructor({ req, res }) {
    this.request = req;
    this.query = req.query;
    this.res = res
  }
  async index() {
    this.res.status(200).json({ message: ENV });
  }
}
export default ({ req, res }) => new Chat({ req, res });

