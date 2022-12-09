import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/';
import AddEdit from './pages/AddEdit/';
import View from './pages/View/';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Header from './components/Header/';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/add" component={AddEdit} />
          <Route path="/view/:id" component={View} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;