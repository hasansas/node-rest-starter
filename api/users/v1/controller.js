//
'use strict';

import Users from "./users";

/**
 * index
 */
exports.index = async (req, res) => {
    Users({ req, res }).index();
}

/**
 * login
 */
exports.login = async (req, res) => {
    Users({ req, res }).login();
}