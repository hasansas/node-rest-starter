/**
 * Routes
 */

import { sync } from 'glob';

export default function (app) {

  const appRouter = require('express').Router();

  // load all routes Dynamically
  sync(__dirname + '/app/**/**/router.js').forEach(function (name) {
    require(name)(app, appRouter);
  });

  // router is configured and ready to use
  app.use('/', appRouter);

  appRouter.use(function (req, res, next) {
    res.status(404).json({
      message: "Not Found"
    });
  });

  // Error Handler
  app.use(function (err, req, res, next) {
    res.status(500).json({
      message: err.message,
      status: 500
    });
  });
}
