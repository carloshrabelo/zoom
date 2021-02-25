import { useEffect } from 'react'
import joinMeeting from './joinMeeting'
import getSignature from './getSignature' // Should be BE

const enterMeeting = ({ email, name, number, passWord }) => {
  const config = { email, name, number, passWord }

  getSignature(config).then(signature => joinMeeting({ ...config, signature }))
}

// Entrar numa nova aba, fechar ao sair
const Zoom = data => {
  useEffect(() => {
    data?.number && enterMeeting(data)
  }, [data])

  return <div id='zmmtg-root' />
}

export default Zoom
