"use strict";

// Test certificates which may be used for mocking, etc.
// JSON collections of actual certificates

const moment = require("moment");

module.exports = {
  google: {
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
    valid_from: moment()
      .add(-7, "d")
      .format("MMM DD HH:mm:ss YYYY z"),
    valid_to: moment()
      .add(7, "d")
      .format("MMM DD HH:mm:ss YYYY z"),
    fingerprint: "7C:01:D9:33:31:31:89:CC:56:92:AC:73:0A:27:23:57:55:A1:DB:DB",
    ext_key_usage: ["1.3.6.1.5.5.7.3.1"],
    serialNumber: "65B40076E2009C52"
  },

  surveysage: {
    subject: {
      C: "US",
      ST: "Virginia",
      L: "Arlington",
      O: "The Corporate Executive Board Company",
      OU: "Unified Communications",
      CN: "www.valterasurveys.com"
    },
    issuer: {
      C: "US",
      O: "DigiCert Inc",
      OU: "www.digicert.com",
      CN: "DigiCert SHA2 High Assurance Server CA"
    },
    subjectaltname:
      "DNS:www.valterasurveys.com, DNS:www.valteraeroom.com, DNS:www.surveysage.com, DNS:www.selectionsage.com, DNS:www.mspoll.valterasurveys.com, DNS:valteraeroom.com, DNS:surveysage.com, DNS:selectionsage.com, DNS:mspoll.valterasurveys.com, DNS:valterasurveys.com",
    infoAccess: {
      "OCSP - URI": ["http://ocsp.digicert.com"],
      "CA Issuers - URI": [
        "http://cacerts.digicert.com/DigiCertSHA2HighAssuranceServerCA.crt"
      ]
    },
    modulus:
      "A75A4CB5D0FD01A08067157FC5C38ED7531443F19727EC6D399C3281D973FBE8C64A630B67CFC3E0C6A97AB89C143F366E18FFE23451DDE8277C5AE5E4EAFA1B0F6440A0EBD52F780DE9ED53E7E0AE6E649A7FA4C0D1301A1719AB12AF9F56ECA7B341FC35D17EA2C74079161BC502F65C477A839D82AB39BB2E4D1AA2C52D44BDB7217E1C4CDC5E0D6AAE2B79F2E2A624A0E5E37E7A773EEDE5D720CCA75CF4BDA8B99CC1B04490135BF7B067770FC6F8DE7E0F12704FB455FA4916E2CB014D0919E9473E157BFE63039D03C1D01B52F0CF9377313A48BDDD3CBF4A3A34C8067E8C4AFECB45C151E473B4835EBEA067334626A64E7D2E725EF9D299C5B97B79",
    exponent: "0x10001",
    valid_from: "Mar 12 00:00:00 2015 GMT",
    valid_to: "May 15 12:00:00 2018 GMT",
    fingerprint: "8F:F6:D8:14:0D:8F:14:54:61:37:77:F4:6C:98:A2:11:DA:F8:2F:38",
    ext_key_usage: ["1.3.6.1.5.5.7.3.1", "1.3.6.1.5.5.7.3.2"],
    serialNumber: "0ED10A68C7A41F4B9BFD07F29F7BA215"
  },

  github: {
    subject: {
      businessCategory: "Private Organization",
      jurisdictionC: "US",
      jurisdictionST: "Delaware",
      serialNumber: "5157550",
      street: "88 Colin P Kelly, Jr Street",
      postalCode: "94107",
      C: "US",
      ST: "California",
      L: "San Francisco",
      O: "GitHub, Inc.",
      CN: "github.com"
    },
    issuer: {
      C: "US",
      O: "DigiCert Inc",
      OU: "www.digicert.com",
      CN: "DigiCert SHA2 Extended Validation Server CA"
    },
    subjectaltname: "DNS:github.com, DNS:www.github.com",
    infoAccess: {
      "OCSP - URI": ["http://ocsp.digicert.com"],
      "CA Issuers - URI": [
        "http://cacerts.digicert.com/DigiCertSHA2ExtendedValidationServerCA.crt"
      ]
    },
    modulus:
      "E7885CF2965C97181CBA98E203F17F399191C26FD996E7284064CD4CA98112036CAE7FE6C619E05A63F06C0BD468B3FFFD3EFD25CFB5597329C4C8B3F4F2BAC9945116E228D1DD9BC78DB7340EA138BD914ED6E77ECFB2D0F152FD84E94127A54EEABE16EC2DB39BFA680C1E37231C603D070726E491DA2C1680DC70137327DD8073C2391150D47373ABFF88D2C99C33C6EF6476606507378732FB2A747F125FD98D6A15ED5F1469C199C18948F0DFA3E037EB3D18B586ADA7DDD364F4BB1F58CDDE5ECE4331BA4A84010EC02882228EF6963C025B2BFE765CB848CB6BE918DCA5CA78BF0D00F5F1B04F4FE646D6EBF44103FD2EE63F8E83BE14A0CE4E57ABE3",
    exponent: "0x10001",
    valid_from: "Mar 10 00:00:00 2016 GMT",
    valid_to: "May 17 12:00:00 2018 GMT",
    fingerprint: "D7:9F:07:61:10:B3:92:93:E3:49:AC:89:84:5B:03:80:C1:9E:2F:8B",
    ext_key_usage: ["1.3.6.1.5.5.7.3.1", "1.3.6.1.5.5.7.3.2"],
    serialNumber: "0BFDB4090AD7B5E640C30B16C9529A27"
  }
};
