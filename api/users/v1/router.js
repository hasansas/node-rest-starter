//
'use strict';

import controller from "./controller";

module.exports = function (app, router) {
  router.get('/users', (req, res) => {
    controller.index(req, res)
  });
};
