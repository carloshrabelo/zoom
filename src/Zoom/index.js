import { useEffect } from 'react'

const enterMeeting = ({ email, name, number, passWord }) => {
  import('./assembly')
  const joinMeeting = import('./joinMeeting')
  const getSignature = import('./getSignature') // Should be BE
  Promise.all([joinMeeting, getSignature]).then(
    ([{ default: joinMeeting }, { default: getSignature }]) =>
      getSignature({
        email,
        name,
        number,
        passWord
      }).then(joinMeeting)
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
