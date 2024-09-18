import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Home from './pages/home';
import Header from './components/header';

function App() {
  return (
  <>
   <BrowserRouter>
   <Header/>
    <Routes>
      {/* <Route path='/' exact={true} element={<Home/>}/> */}
    </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;
