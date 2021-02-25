import ZoomMtg from '../lib/zoom'

const API_KEY = process.env.REACT_APP_API_KEY

const JoinMeeting = ({
  email,
  name,
  number,
  passWord,
  signature,
  leaveUrl = '/index.html?close=true',
  webEndpoint
}) => {
  ZoomMtg.i18n.load('pt-BR')
  const success = () =>
    ZoomMtg.join({
      userName: name,
      userEmail: email,
      meetingNumber: number,
      signature,
      apiKey: API_KEY,
      passWord
    })

  return ZoomMtg.init({
    leaveUrl,
    webEndpoint,
    success,
    error: res => console.log(res)
  })
}

export default JoinMeeting
