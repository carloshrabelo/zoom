import { useEffect } from 'react'

const enterMeeting = ({ email, name, number, passWord }) => {
  const config = { email, name, number, passWord }
  
  const assembly = import('./assembly')
  const joinMeeting = import('./joinMeeting')
  const getSignature = import('./getSignature') // Should be BE

  Promise.all([joinMeeting, getSignature, assembly]).then(
    ([{ default: joinMeeting }, { default: getSignature }]) =>
      getSignature(config).then(signature =>
        joinMeeting({ ...config, signature })
      )
  )
}

// Entrar numa nova aba, fechar ao sair
const Zoom = data => {
  useEffect(() => {
    data?.number && enterMeeting(data)
  }, [data])

  return <div id='zmmtg-root' />
}

export default Zoom
