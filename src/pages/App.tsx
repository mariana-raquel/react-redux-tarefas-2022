import { Container } from '@mui/material';
import Home from './home';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Container>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
  </Container>
  )
}

export default App
