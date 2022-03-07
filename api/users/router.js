/**
 * Users Routes
 */

'use strict';

import UsersController from "./controller";

module.exports = function (app, router) {

  // Register User
  router.post(
    '/v1/register',
    expressValidator.body('email').isEmail().normalizeEmail(),
    expressValidator.body('name').not().isEmpty(),
    expressValidator.check('password')
      .isLength({ min: 8 }).withMessage('must be at least 8 chars long')
      .matches(/\d/).withMessage('must contain a number'),
    (req, res) => { UsersController({ req, res }).register(); }
  );

  // Login
  router.post(
    '/v1/login',
    expressValidator.body('email').isEmail(),
    expressValidator.body('password').not().isEmpty(),
    (req, res) => {
      UsersController({ req, res }).login();
    });

  // Get Users
  router.get('/v1/users', authenticateJWT, (req, res) => {
    UsersController({ req, res }).index();
  });
};
