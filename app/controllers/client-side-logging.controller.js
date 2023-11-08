'use strict'

const { getLoggingFields } = require('../utils/logging-fields-helper')
const logger = require('../utils/logger')(__filename)

const LOG_CODES = {
  ApplePayAvailable: 'Apple Pay is available on this device',
  ApplePayStarted: 'User chose Apple Pay method',
  ApplePayAborted: 'Apple Pay attempt aborted by user',
  ApplePayMerchantIdNotValid: 'Apple Pay Merchant ID not valid',
  ApplePayMerchantValidationError: 'Error completing Apple Pay merchant validation',
  ApplePayErrorMakingRequestToAuthorise: 'There was an error making a request to the server to authorise an Apple Pay payment',
  ApplePaySuccessfulAuthorisation: 'Apple Pay authorisation was successful',
  ApplePayFailedAuthorisation: 'Apple Pay authorisation failed',
  GooglePayAvailable: 'Google Pay is available on this device',
  GooglePayStarted: 'User chose Google Pay method',
  GooglePayAborted: 'Google Pay attempt aborted by user',
  GooglePayErrorMakingRequestToAuthorise: 'There was an error making a request to the server to authorise an Google Pay payment',
  GooglePaySuccessfulAuthorisation: 'Google Pay authorisation was successful',
  GooglePayFailedAuthorisation: 'Google Pay authorisation failed'
}

function log (req, res) {
  const code = req.body && req.body.code
  if (LOG_CODES.hasOwnProperty(code)) { // eslint-disable-line
    logger.info(LOG_CODES[code], getLoggingFields(req))
  } else {
    logger.info('Client side logging endpoint called with invalid log code')
  }
  res.sendStatus(200)
}

module.exports = {
  log
}
