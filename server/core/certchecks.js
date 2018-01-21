'use strict'

const isDatesValid = (cert) => {
  const now = Date.now();
  return Date.parse(cert.valid_from) <= now && Date.parse(cert.valid_to) > now;
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