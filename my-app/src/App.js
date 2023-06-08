
import './App.css';
import Greet from './components/Greet';
function App() {
  return (
    <div className="App">
     <Greet name='Sangeet' heroName='Batman'/>
     <Greet name='Tanya'/>
     <Greet name='San'>
    <p>This paragraph is children prop</p>
      </Greet>
    </div>
  );
}

export default App;
