const toSolidBytes = (match, p1) => String.fromCharCode('0x' + p1)

export const b64EncodeUnicode = str =>
  !str
    ? undefined
    : btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, toSolidBytes))

export const b64DecodeUnicode = str =>
  decodeURIComponent(
    atob(str)
      .split('')
      .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  )

export const decode = function (name) {
  if (!name) return ''
  try {
    return b64DecodeUnicode(name)
  } catch (e) {
    return name
  }
}
