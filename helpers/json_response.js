/**
 * JSON Response
 */

'use strict';

export function get({ status, data, message, error }) {

   // success response
   const _successResponse = {
      status: status,
      code: 200,
      message: message ?? 'OK',
      data: data
   };

   // error response
   const _errorResponse = {
      status: status,
      code: 400,
      message: message ?? 'OK',
   };
   return status == 'success' ? _successResponse : _errorResponse;
};

const jsonResponse = {
   get: get
};

export default jsonResponse;
