"use client"
import { ToastContainer } from 'react-toastify'
import MainPage from './Page/MainPage'
import { store } from './store'
import { Provider } from 'react-redux'
export default function Home() {
  return (
<>

<Provider store={store}>
<MainPage/>
</Provider>

</>
  )
}
