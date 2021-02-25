const API_KEY = process.env.REACT_APP_API_KEY

const JoinMeeting = async ({
  email,
  name,
  number,
  passWord,
  signature,
  leaveUrl = '/index.html?close=true',
  webEndpoint
}) => {
  const [ZoomMtg] = await Promise.all([
    import('../lib/zoom').then(r => r.default),
    import('./assembly')
  ])
  
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
