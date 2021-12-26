import logo from './logo.svg';
import HelloWorld from './components/HelloWorld';
import SayMyName from "./components/SayMyName";
import Pessoa from './components/Pessoa';

import './App.css';

const App = () => {
	return (
		<div className='App'>
			<Pessoa nome="Maciel" profissao="Programador" idade="18" foto="https://via.placeholder.com/150" />
		</div>
	);
}

export default App;
