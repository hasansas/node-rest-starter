/**
 * JWT Middleware
 */

'use strict';

import { verify } from 'jsonwebtoken';

export default function (req, res, next) {
	const _authHeader = req.headers.authorization;
	const _jwtSecret = ENV.parsed.JWT_SECRET;

	if (!_authHeader) {
		return res.status(403).json({
			message: 'No authorization token was found',
		});
	}

	const _token = _authHeader.split(' ')[1];
	verify(_token, _jwtSecret, (err, user) => {
		if (err) {
			return res.status(401).json({
				message: 'Invalid authorization token',
			});
		}

		req.user = user;
		next();
	});
};