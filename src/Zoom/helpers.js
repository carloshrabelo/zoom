const toSolidBytes = (match, p1) => String.fromCharCode('0x' + p1)

export const b64EncodeUnicode = str =>
  !str
    ? undefined
    : btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, toSolidBytes))
