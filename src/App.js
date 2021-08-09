import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
//import react from 'react';


//const TestComponent = () => <p>просто render</p>

class App extends Component {
    
  render(){  
    const { name, surname, age} = this.props.user
			return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Мой Топ Фото</h1>
				</header>
				<p className="App-intro">
					Здесь будут мои самые залайканые фото
				</p>
                <p>Меня зовут :
                    {name} {surname}
								</p>
								<p>		
                   Мой Возраст:
                    {age}  
                </p>
			</div>
		);
	}
}

// приклеиваем данные из store
const mapStateToProps = store => {
    console.log(store) // посмотрим, что же у нас в store?
    return {
        user: store.user,
    }
}


export default connect(mapStateToProps)(App)
//export default App;
