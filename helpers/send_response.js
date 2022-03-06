/**
 * Send Response
 */

'use strict';

export const sendSuccessResponse = function (res, code, data, message = 'Successful') {
  return res.status(code).send({
    status: 'success',
    message,
    data
  });
}

export const sendErrorResponse = function (res, code, errorMessage = 'Cannot perform operation', error = null) {
  let _payload = {
    status: 'error',
    message: errorMessage,
  }
  if (error != null) {
    _payload = { ..._payload, ...{ error: error } }
  }
  return res.status(code).send(_payload);
}

const sendResponse = {
  success: sendSuccessResponse,
  error: sendErrorResponse,
}

export default sendResponse;
