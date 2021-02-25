import crypto from 'crypto'

const API_KEY = process.env.REACT_APP_API_KEY
const API_SECRET = process.env.REACT_APP_API_SECRET

export const getSignature = data => {
  const meetingNumber = parseInt(data.number)
  const role = !data.role ? 0 : parseInt(data.role, 10)
  const timestamp = new Date().getTime() - 30000

  const msg = Buffer.from(API_KEY + meetingNumber + timestamp + role).toString(
    'base64'
  )

  const hash = crypto
    .createHmac('sha256', API_SECRET)
    .update(msg)
    .digest('base64')

  const signature = Buffer.from(
    `${API_KEY}.${meetingNumber}.${timestamp}.${role}.${hash}`
  ).toString('base64')

  return Promise.resolve(signature)
}

export default getSignature
