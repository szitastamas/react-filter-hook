import { Container } from '@mui/material';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import UserList from './layout/UserList';

function App() {
  return <div className='App'>
    <Navbar />
    <Container>
      <Routes>
        <Route path='/users' element={<UserList />} />
        <Route path='/' element={<h1>Hello World</h1>} />
      </Routes>
    </Container>
  </div>;
}

export default App;
