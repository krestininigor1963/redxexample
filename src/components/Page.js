import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
   
  render(){ 
    const {year, photos} = this.props
		return(
			<div>
				<p>У тебя фоток {photos.length} за {year}</p>
			</div>
		)
	}	
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
}