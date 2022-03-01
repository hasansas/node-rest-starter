/**
 * Routes
 */

'use strict';

import { sync } from 'glob';
import express from 'express';

export default function (app) {
  // Check health
  app.get('/__health', (req, res) => {
    res.status(200).json({ message: 'OK' });
  });

  // x-api-key
  app.use(function (req, res, next) {
    const _xApiKeyHeader = req.headers['x-api-key'];
    const _xApiKey = ENV.parsed.X_API_KEY;

    if (!_xApiKeyHeader) {
      return res.status(403).json({
        message: 'No API key was found',
        status: 403
      });
    }
    if (_xApiKeyHeader != _xApiKey) {
      return res.status(401).json({
        message: 'Invalid API key',
        status: 401
      });
    }
    next();
  });

  // load all v1 routes Dynamically
  const apiRouterV1 = express.Router();

  sync(__dirname + '/api/**/**/v1/router.js').forEach(function (name) {
    require(name)(app, apiRouterV1);
  });

  app.use('/v1/', apiRouterV1);

  // load all v2 routes Dynamically
  const apiRouterV2 = express.Router();

  apiRouterV2.use(function (req, res, next) {
    const authHeader = req.headers['x-api-key'];
    console.log(authHeader)
    if (!authHeader || authHeader != '12345') {
      return res.status(500).json({
        message: err.message,
        status: 500
      });
    }
    next();
  });

  sync(__dirname + '/api/**/**/v2/router.js').forEach(function (name) {
    require(name)(app, apiRouterV2);
  });

  app.use('/v2/', apiRouterV2);

  // router not found
  app.use(function (req, res, next) {
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
