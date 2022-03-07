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

export const sendErrorResponse = function (res, code, error = null) {
  const _httpResponseMessage = httpResponse.message(code);
  let _errorMessage = error.message ?? _httpResponseMessage.description;
  let _error = error.errors ?? null;

  if (error.name) {
    switch (error.name) {
      case 'SequelizeConnectionRefusedError':
        _errorMessage = 'Error establishing a database connection';
        break;

      case 'SequelizeValidationError':
        break;

      default:
        break;
    }
  }

  let _payload = {
    status: 'error',
    message: _errorMessage,
  }

  if (_error != null) {
    _payload = { ..._payload, ...{ error: _error } }
  }
  return res.status(code).send(_payload);
}

const sendResponse = {
  success: sendSuccessResponse,
  error: sendErrorResponse,
}

export default sendResponse;
