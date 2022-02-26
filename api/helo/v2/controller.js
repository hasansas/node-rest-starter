//
'use strict';

import Helo from "./helo";

/**
 * index
 */
exports.index = async (req, res) => {
    Helo({ req, res }).index();
}