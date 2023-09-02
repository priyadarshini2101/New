import logo from './logo.svg';
import './App.css';
import Cake from './components/Cake';
import { Provider } from 'react-redux';
import cstore from './redux/CakeApplication/Store';
import Counter from './Counter';
import UTpgm from './Ktpgm';
import Login from './Login';
import UNandPassw from './UNandPassw';
import Signuppage from './Signuppage';
import Calci from './Calci';
import Assignment from './Assignment';


function App() {
  return (
    <Provider store={cstore}>
    <div className="App">
      {/* <Login /> */}
     {/* <UTpgm /> */}
     {/* <Signuppage /> */}
     {/* <Calci /> */}
     <Assignment />
     {/* <UNandPassw /> */}
     
     {/* <Counter /> */}
     {/* <Cake /> */}
    </div>
    </Provider>
  );
}



export default App;
