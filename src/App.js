import './App.css';
import Greeting from './componenets/Greeting';
import NameTag from './componenets/NameTag';
import UserForm from './componenets/UserForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Greeting />
       <NameTag 
       firstName= "Anttoinette"
       lastName="Henry"
       Email="henry@yahoo.com"
       favColor="pink"
       date="2023/02/06"/>
       <UserForm />
      </header>
    </div>
  );
}

export default App;
