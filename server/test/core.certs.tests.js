"use strict";
const moment = require('moment');
const chai = require("chai");
const expect = chai.expect;
const certchecks = require("../core/certchecks.js");
const acert = {
  subject: {
    C: "US",
    ST: "California",
    L: "Mountain View",
    O: "Google Inc",
    CN: "www.google.com"
  },
  issuer: { C: "US", O: "Google Inc", CN: "Google Internet Authority G2" },
  subjectaltname: "DNS:www.google.com",
  infoAccess: {
    "CA Issuers - URI": ["http://pki.google.com/GIAG2.crt"],
    "OCSP - URI": ["http://clients1.google.com/ocsp"]
  },
  valid_from0: "Jan 10 09:39:00 2018 GMT",
  valid_to0: "Apr  4 09:39:00 2018 GMT",
  valid_from: moment().add(-7, 'd').format('MMM DD HH:mm:ss YYYY zz'),
  valid_to: moment().add(7, 'd').format('MMM DD HH:mm:ss YYYY zz'),
  fingerprint: "7C:01:D9:33:31:31:89:CC:56:92:AC:73:0A:27:23:57:55:A1:DB:DB",
  ext_key_usage: ["1.3.6.1.5.5.7.3.1"],
  serialNumber: "65B40076E2009C52"
};
console.log(`cert dates: to: ${acert.valid_to}, from: ${acert.valid_from}`);
const badcert = {};
const dfrom = Date.now() - 2000;
const dto = Date.now() + 2000;
const certfp = '7C:01:D9:33:31:31:89:CC:56:92:AC:73:0A:27:23:57:55:A1:DB:DB'
const certsn = '65B40076E2009C52'

describe("CertChecks", function() {
  it("isDatesValid(valid_from, valid_to) should return true if now() between dates", function() {
    expect(certchecks.isDatesValid(dfrom, dto)).to.equal(true);
  });

  it("isFingerprintMatch(cert, fingerprint) should match, return true", function() {
    expect(certchecks.isFingerprintMatch(acert, certfp)).to.equal(true);
  })

  it("isFingerprintMatch(cert, fingerprint) should not match, bad cert sent", function() {
    expect(certchecks.isFingerprintMatch(badcert, certfp)).to.equal(false);
  })

  it("isSerialNumMatch(cert, serialNum) should mat, return true", function() {
    expect(certchecks.isSerialNumMatch(acert, certsn)).to.equal(true);
  })

});
