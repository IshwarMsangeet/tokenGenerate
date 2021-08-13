var jwt = require("jsonwebtoken");

var token = jwt.sign(
  {
    email:
      "ak_sa_test-9085ddac-4ae9-40a3-a7fc-6c454039f084@service-accounts.informa.com",
    iss: "https:&#x2F;&#x2F;example.com",
    iat: Math.floor(Date.now() / 1000) - 30,
    exp: Math.floor(Date.now() / 1000) + 3600,
    aud: "476e6a739bf7f39d3543af622bd4fbd2e7dd44607338fddfa1f5c08610cdd6ca",
  },
  {
    key: "-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIC3TBXBgkqhkiG9w0BBQ0wSjApBgkqhkiG9w0BBQwwHAQId0lwj5uEvtsCAggA\nMAwGCCqGSIb3DQIJBQAwHQYJYIZIAWUDBAEqBBCmRIZdcvn8WRppMI5Nni9wBIIC\ngN5h/CA18S9FqhAErV8v+BMNr4Z3Vc+TxvRS94YDLGSz5z0pC1/OQM7020cqg0Yx\nPJYb0NLW1H+JD57G0qO32gw03w6q9He1y5fTKjnHdXzbcIBSWPJM3p2gLuTMxcKW\nftasm480LGlg5mHyhkLGgJFWFpCrAEth2DdQQFbp2rgbHL1L1lgKiaxX8CzAkKIJ\nTUVAubm9cmJ3/e/U7jueIZbmySOPkU3qk07mvsTPVFdePaW8bE+ZipYfZJMH2qZQ\n9mV8lICFfCANKVKsVEzCzAQC+shFWfvMoZgDFSmh8kM2oug+MjPdFW36nNFV/EFP\ny5cDnJVFayYZkugjSwdc7i/LLUOs4iUsZ2J12e6EsbZ4+6TdS0x/mnbD9vTQ21+A\nQ92t600uB7e6vfytD1N3mV3UQwkdLg5KoxMyz0uZoYT47Nxdo80s4DDcBz13NLld\nEuwDqoyjgebaFBsXpDcRAa+/7mCEoKX+0Pq8H/7Vinx1S8zMQDzOE8zhA0IOAKQ0\n+/PFOVgwqhjuW6qYLzV1q8BWlbYuiNSXivS41FHCXLVBc8u5faAfQPsV2VTOBltB\nYoK7efOdaJwBSH6EJJWNWQoGIlBvAddLZkwWqfp5rZeIpVzQpK0IKMnSNIcQfqXi\nToyVS2NGOBPsKSQ9U/L1DOgZOuvMgnxDJJxPBDOhz9bnCPf+NGrZbwWgOe894Rju\nNFtDK35hXIWOdDCchoIYAnwh81cCq9exCFw3bl1hSXDBtDxiO/qOlTPepNIqH3j4\nI2EUTjM65+SlmxgQvAacfeWzEa5eaNlEmKhPCR/EcxHmylhaKnhbtI2uPudOfZS7\n/wzP6SKZkC3w4ReB2gM+q84=\n-----END ENCRYPTED PRIVATE KEY-----",
    passphrase: "Ioh@1234",
  },
  { algorithm: "RS256" }
);
console.log("generated token ", token);
console.log("     ===========================================================");
console.log(
  "token verified ",
  jwt.verify(
    token,
    "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDctPtnDwDnC+P1YOfEh2anHu6N\n/aLBuaKISxkXHu/8os/J+ZsGfv8mNbhbAxr0YN94CRQ0zNKhs2gyYJNsYf5a6Kwo\nIAlzXULF7KQCO3KGdLhQx69AyLrXMe86yKADUTx3lPCzrmbmRzdRSA6iernMW7oJ\nnUbHYqk8vDR1We+kpwIDAQAB\n-----END PUBLIC KEY-----"
  )
);
