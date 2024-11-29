import { Provider } from 'react-redux'
import store from './store/store'
import './App.css'
import { Container, Typography } from '@mui/material'
import AddHabitForm from './components/add-habit-form'

function App() {

  return (
    <div>
      <Provider store={store}>
        <Container maxWidth="md">
          <Typography component='h1' variant='h2' align='center'>
            Habbit Tracker
          </Typography>
          <AddHabitForm />
        </Container>
      </Provider>
    </div>
  )
}

export default App
