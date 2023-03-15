import './App.css';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import List from './components/List';
import Evento01 from './components/Evento01';
import Form from './components/Form';

function App() {
  const name = 'Thiago'

  return (
    <>
    
    <div className="App">
      {/* <SayMyName name={name}/>
      <Person nome='Thiago' idade='30 anos' profissao='Estagiário em Desenvolvimento Web' foto='https://via.placeholder.com/150'/>
      <List/> */}

      <Form/>
    </div>
      {/* <Evento01/> */}
      
    </> 
  );
}

export default App;
