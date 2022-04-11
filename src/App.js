import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar';
import TableSearch from './components/TableSearch/TableSearch';
import Home from './components/Home/Home';
/* import './assets/css/fonts.css'; */

function App() {
  return (
<>
<BrowserRouter>
  <Routes> 
    <Route path='/' element={<NavBar/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/allsongs' element={<TableSearch/>} />
      <Route path='*' element={<Navigate to='/'/>} /> 
    </Route>
  </Routes>
</BrowserRouter>

</>
  );
}

export default App;
