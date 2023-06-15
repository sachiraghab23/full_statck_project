//importing styles
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'

//importing react dependencies
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

//importing files & components
import Admin from './screens/Admin';
import About from './components/About';
import CartScreen from './screens/CartScreen';
import Home from './screens/Home';
import Login from './screens/Login';
import Navbar from './screens/Navbar';
import Register from './screens/Register';
import OrderScreen from './screens/OrderScreen';
import Contact from './components/Contact';
import Policy from './components/Policy';
import Topbar from './screens/Topbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar/>
        <Navbar/>
        <Routes>
          <Route path='/admin' exact element={<Admin/> } />
          <Route path='/about' exact element={<About/> } />
          <Route path='/cart' exact element={<CartScreen/> } />
          <Route path='/contact' exact element={<Contact/>} />
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/orders' exact element={<OrderScreen/> } />
          <Route path='/policy' exact element={<Policy/> } />
          <Route path='/register' exact element={<Register/>} />
          <Route path='/' element={<Home/>} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;