'use strict'

const isDatesValid = (valid_from, valid_to) => {
  const now = Date.now();
  return valid_from <= now && valid_to > now;
}

const isFingerprintMatch = (cert, fingerprint) => {
  return cert.fingerprint === fingerprint;
}

const isSerialNumMatch = (cert, serialNum) => {
  return cert.serialNumber === serialNum;
}

module.exports = {
  isDatesValid: isDatesValid,
  isFingerprintMatch: isFingerprintMatch,
  isSerialNumMatch: isSerialNumMatch
};