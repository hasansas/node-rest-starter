/**
 * HTTP Response
 */

'use strict'

const ResponseMessage = {
  title: '',
  description: ''
}

export const HTTPStatus = {
  connectionRefused: 111,
  ok: 200,
  created: 201,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  internalServerError: 500,
  notImplement: 501
}

export const responseMessage = function (statusCode) {
  switch (statusCode) {
    case HTTPStatus.connectionRefused:
      ResponseMessage.title = 'Connection refused'
      ResponseMessage.description = 'A network error occurred.'
      break

    case HTTPStatus.ok:
      ResponseMessage.title = 'OK'
      ResponseMessage.description = 'The request has succeeded.'
      break

    case HTTPStatus.created:
      ResponseMessage.title = 'Created'
      ResponseMessage.description = 'The request has succeeded and a new resource has been created as a result.'
      break

    case HTTPStatus.noContent:
      ResponseMessage.title = 'No Content'
      ResponseMessage.description = 'There is no content to send for this request.'
      break

    case HTTPStatus.badRequest:
      ResponseMessage.title = 'Bad Request'
      ResponseMessage.description =
        'The server could not understand the request due to invalid syntax.'
      break

    case HTTPStatus.unauthorized:
      ResponseMessage.title = 'Unauthorized'
      ResponseMessage.description = 'The request does not have valid authentication credentials for the operation.'
      break

    case HTTPStatus.forbidden:
      ResponseMessage.title = 'Forbidden'
      ResponseMessage.description =
        'The client does not have access rights to the content.'
      break

    case HTTPStatus.notFound:
      ResponseMessage.title = 'Not Found'
      ResponseMessage.description = 'The server can not find the requested resource.'
      break

    case HTTPStatus.internalServerError:
      ResponseMessage.title = 'Internal Server Error'
      ResponseMessage.description = 'The server encountered an internal error or misconfiguration and was unable to complete your request.'
      break

    default:
      break
  }

  return ResponseMessage
}

const httpResponse = {
  status: HTTPStatus,
  message: responseMessage
}

export default httpResponse
