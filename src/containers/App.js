import React, {Component} from 'react';
import { connect } from 'react-redux';
import {User} from '../components/User'
import {Page} from '../components/Page'
import './App.css';
//import react from 'react';


//const TestComponent = () => <p>просто render</p>

class App extends Component {
    
  render(){  
    
    //const {name} = this.props.user
    //const {year, photos} = this.props.page
    //const {year} = this.props.year
			const{user,page} = this.props
			return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Мой Топ Фото</h1>
				</header>
				<User name={user.name} />
				<Page year={page.year} photos={page.photos} />

			</div>
		);
	}
}

// приклеиваем данные из store
const mapStateToProps = store => {
    console.log(store) // посмотрим, что же у нас в store?
    return {
        user: store.user,
        page: store.page,
        //photos: store.page.photos,
        //year:  store.page.year,  

    }
}


export default connect(mapStateToProps)(App)
//export default App;
