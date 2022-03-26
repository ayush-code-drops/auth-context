import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import LoginForm from './components/LoginForm';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import LoginStatus from './components/LoginStatus';

function App() {
  const {auth}=useContext(AuthContext)
  return (
    <div className="App">
      <Navbar/>
      <h3>Context Api</h3>
    { auth==false? <LoginForm/>:<LoginStatus/>}

    </div>
  );
}

export default App;
