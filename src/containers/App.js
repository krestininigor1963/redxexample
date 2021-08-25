import React, {Component} from "react";
import {connect} from "react-redux";
import {User} from "../components/User";
import {Page} from "../components/Page";
//import { setYear } from "../actions/PageActions";
import {getPhotos} from "../actions/PageActions";



class App extends Component {
	render() {
		//const { user, page, setYearAction } = this.props;
		const { user, page, getPhotosAction } = this.props;
		return (
			<div className="app">
				<User name={user.name} />
				<Page 
					year={page.year} 
					photos={page.photos} 
					isFetching={page.isFetching}
					getPhotos={getPhotosAction} 
				/>
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
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		//setYearAction: (year) => dispatch(setYear(year)),
		getPhotosAction: (year) => dispatch(getPhotos(year)),

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
