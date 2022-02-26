//
'use strict';

import controller from "./controller";

module.exports = function (app, router) {
  router.get('/helo', (req, res) => {
    controller.index(req, res)
  });
};
