import './App.css';
import Header from './component/header/Header';
import MainBody from './component/mainBody/MainBody';

function App() {

  return (
    <div className="App">
      {/* Calling Components */}
      <Header />
      <MainBody/>
    </div>
  );
}

export default App;
