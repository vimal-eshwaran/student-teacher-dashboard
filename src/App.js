import { Route, Switch } from 'react-router-dom';
import './App.css';
import Base from './Base/Base';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard';
import ButtonsCom from './Components/Buttons';
import Carts from './Components/Carts';
import Colors from './Utilities/Colors';
import Borders from './Utilities/Borders';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Forgot from './Pages/Forgot';
import Error from './Pages/404page';
import Tables from './Pages/Tables';



function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path='/'>
          <Dashboard/>
        </Route>

        <Route path='/buttons'>
          <ButtonsCom/>
        </Route>

        <Route path='/carts'>
          <Carts/>
        </Route>

        <Route path='/colors'>
          <Colors/>
        </Route>

        <Route path='/borders'>
          <Borders/>
        </Route>

        <Route path='/login'>
          <Login/>
        </Route>

        <Route path='/register'>
          <Register/>
        </Route>

        <Route path='/forgot'>
          <Forgot/>
        </Route>

        <Route path='/tables'>
          <Tables/>
        </Route>

        <Route path='/**'>
          <Error/>
        </Route>


      </Switch>

    </div>
  );
}

export default App;
