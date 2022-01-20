import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Layout/Header";
function App() {
  return (
    <div className="App"><Header/>
      <Dashboard/>
    </div>
  );
}

export default App;