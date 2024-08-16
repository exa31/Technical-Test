import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { CookiesProvider, useCookies } from 'react-cookie'
import { useState } from 'react'
import { me } from './api/auth'
import { LoginContext } from './context'


function App() {

  const [login, setLogin] = useState(false)

  const [cookies, setCookie, removeCookie] = useCookies(['token']);


  if (cookies.token) {
    me(cookies.token).then((res) => {
      if (res.status === 401) {
        return removeCookie('token')
      }
      setLogin(true)
      console.log("login")
      setCookie("token", cookies.token, { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) })
    }).catch(() => {
      console.log("logout")
      return removeCookie('token')
    })
  }



  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <LoginContext.Provider value={{ login, setLogin }}>
        <RouterProvider router={router} />
      </LoginContext.Provider>
    </CookiesProvider>
  )
}

export default App