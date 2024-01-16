import './App.css';
import FormElem from './komponensek/FormElem';

function App()
{
  return (
    <div className="App">
      <header className="App-header">
        <h1>Űrlap</h1>
      </header>
      <div>
        <FormElem adatKuld={adat => {
          console.log(adat);
        }} />
      </div>
    </div>
  );
}

export default App;
