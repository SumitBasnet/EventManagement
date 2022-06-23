import React from 'react'
import coverVid from '../Assets/eventvid.mp4'
import Banner from './Banner'

const CoverVdeo = () => {
	return (
		<div className="vid">
		<video src={coverVid} type="video/mp4" autoPlay muted loop delay="100"> </video>
		<Banner />
		</div>
	)
}

export default CoverVdeo