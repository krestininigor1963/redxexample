import React, { Component } from "react";
import { connect } from "react-redux";
import { User } from "../components/User";
import { Page } from "../components/Page";
import { setYear } from "../actions/PageActions";
import "./App.css";


class App extends Component {
	render() {
		const { user, page, setYearAction } = this.props;
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Мой Топ Фото</h1>
				</header>
				<User name={user.name} />
				<Page year={page.year} photos={page.photos} setYear={setYearAction} />
			</div>
		);
	}
}

// приклеиваем данные из store
const mapStateToProps = (store) => {
	console.log(store); // посмотрим, что же у нас в store?
	return {
		user: store.user,
		page: store.page,
		//photos: store.page.photos,
		//year:  store.page.year,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setYearAction: (year) => dispatch(setYear(year)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;