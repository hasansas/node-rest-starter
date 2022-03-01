//
'use strict';

import controller from "./controller";

module.exports = function (app, router) {
  router.get('/users', authenticateJWT, (req, res) => {
    controller.index(req, res)
  });
  
  router.post('/login', (req, res) => {
    controller.login(req, res)
  });
};
