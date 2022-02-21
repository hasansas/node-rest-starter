//
import controller from "./controller";

module.exports = function (app, router) {
  router.get('/send', (req, res) => {
    controller.index(req, res)
  });
};
