import { useState } from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import './App.css'

function App() {

  return (
    <div>
        <Provider store={store}>
          
        </Provider>
    </div>
  )
}

export default App
