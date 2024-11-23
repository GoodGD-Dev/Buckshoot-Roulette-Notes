import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './styles'
import store from './store'
import StartGame from './components/StartGame'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <StartGame />
      </Container>
    </Provider>
  )
}

export default App
