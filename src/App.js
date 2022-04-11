// import logo from './logo.svg';
import './App.css';
import Header from './conponents/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './conponents/Home/Home';
import Login from './conponents/Login/Login';
import Registration from './conponents/Registration/Registration';
import Products from './conponents/Products/Products';
import RequireAuth from './conponents/RequireAuth/RequireAuth';
import Orders from './conponents/Orders/Orders';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orders' element={
          <RequireAuth><Orders /></RequireAuth>
        }> </Route>


      </Routes>



    </div>
  );
}

export default App;
