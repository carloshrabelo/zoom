import ZoomMtg from '../lib/zoom'
import { decode } from './helpers'

const JoinMeeting = ({
  userName,
  userEmail,
  signature,
  leaveUrl = '/index.html?close=true',
  webEndpoint,
  ...meetingConfig
}) =>
  ZoomMtg.init({
    leaveUrl,
    webEndpoint,
    success: () => {
      ZoomMtg.i18n.load(meetingConfig.lang)
      ZoomMtg.i18n.reload(meetingConfig.lang)
      ZoomMtg.join({
        userName: decode(userName),
        userEmail: decode(userEmail),
        meetingNumber: meetingConfig.meetingNumber,
        signature: signature,
        apiKey: meetingConfig.apiKey,
        passWord: meetingConfig.passWord
      })
    },
    error: res => console.log(res)
  })

export default JoinMeeting
