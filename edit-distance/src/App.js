import './App.css';
import Divider from './components/Divider';
import Header from './components/Header';
import EditDistance from './components/EditDistance';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Divider></Divider>
      <EditDistance></EditDistance>
      <Divider></Divider>
    </div>
  );
}

export default App;
