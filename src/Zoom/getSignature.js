// Should be at BE

import ZoomMtg from '../lib/zoom'
import { b64EncodeUnicode } from './helpers'

const API_KEY = process.env.REACT_APP_API_KEY
const API_SECRET = process.env.REACT_APP_API_SECRET

const makeMeetingConfig = ({
  number,
  name,
  passWord,
  role = 0,
  email,
  lang = 'pt-PT',
  china = false
}) => ({
  apiKey: API_KEY,
  meetingNumber: parseInt(number),
  userName: b64EncodeUnicode(name) || '',
  userEmail: b64EncodeUnicode(email) || '',
  passWord: passWord,
  role: parseInt(role, 10),
  lang: lang,
  signature: '',
  china
})

const getSignature = data =>
  new Promise(resolve => {
    const meetingConfig = makeMeetingConfig(data)
    const success = res => resolve({ ...meetingConfig, signature: res.result })
    ZoomMtg.generateSignature({
      apiSecret: API_SECRET,
      meetingNumber: meetingConfig.meetingNumber,
      apiKey: meetingConfig.apiKey,
      role: meetingConfig.role,
      success
    })
  })

export default getSignature
