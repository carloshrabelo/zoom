import { useEffect, useState } from 'react'
import './App.css'
import Zoom from './Zoom'

const getUrlParam = () => {
  var queryString = window.location.search
  var urlParams = new URLSearchParams(queryString)
  return Object.fromEntries(urlParams.entries()) || {}
}

function App () {
  var [isJoin, join] = useState(false)
  const [formData, setFormData] = useState({})
  useEffect(() => {
    const params = getUrlParam()
    if (params.close) return typeof window !== 'undefined' && window.close()
    if (params.number) join(true)
    setFormData(params)
  }, [])

  const bindData = ({ target: { name, value } }) =>
    setFormData(data => ({ ...data, [name]: value }))

  const { email, name, number, passWord } = formData
  return isJoin ? (
    <Zoom name={name} number={number} passWord={passWord} email={email} />
  ) : (
    <div className='App'>
      <form
        onSubmit={e => {
          e.preventDefault()
          join(true)
        }}
      >
        <div className='flex'>
          <input
            name='email'
            placeholder='email'
            value={formData.email}
            onChange={bindData}
          />
          <input
            name='name'
            placeholder='name'
            value={formData.name}
            onChange={bindData}
          />
          <input
            name='number'
            placeholder='number'
            value={formData.number}
            onChange={bindData}
          />
          <input
            name='passWord'
            placeholder='passWord'
            value={formData.passWord}
            onChange={bindData}
          />
        </div>
        <div className='flex'>
          <button type='submit'>Join Zoom Meeting - {formData?.number}</button>
          <div
            className='button'
            onClick={() =>
              window.open(
                '?' + new URLSearchParams(formData).toString(),
                '_blank'
              )
            }
          >
            Join Zoom in tab - {formData?.number}
          </div>
        </div>
      </form>
    </div>
  )
}

export default App
