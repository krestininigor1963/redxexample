import React from "react";
import PropTypes from "prop-types";

export class Page extends React.Component {

	onBtnClick = e => {
		const year = e.currentTarget.innerText
		this.props.getPhotos(year)
	}

	render() {
		const { year, photos, isFetching } = this.props;
		return (
			<div className="ib page">
				<p>
					<button className="btn" onClick={this.onBtnClick}>2021</button>{' '}
					<button className="btn" onClick={this.onBtnClick}>2020</button>{' '}
					<button className="btn" onClick={this.onBtnClick}>2019</button>{' '}
					<button className="btn" onClick={this.onBtnClick}>2018</button>{' '}
				</p>
				<h3>за {year}</h3>
				{isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
			</div>

		);
	}
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  //setYear: PropTypes.func.isRequired,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
