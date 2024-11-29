import { useState } from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import './App.css'
import { Container, Typography } from '@mui/material'

function App() {

  return (
    <div>
      <Provider store={store}>
        <Container maxWidth="md">
          <Typography component='h1' variant='h2' align='center'>
            Habbit Tracker
          </Typography>
        </Container>
      </Provider>
    </div>
  )
}

export default App
