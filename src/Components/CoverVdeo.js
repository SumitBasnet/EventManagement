import React from 'react'
import Banner from './Banner'


const CoverVdeo = () => {
	return (
		<>
		<div className="vid">
		<video src="/assets/eventvid.mp4"type="video/mp4" autoPlay muted loop > </video>
		</div>
		<Banner />
		</>
	)
}

export default CoverVdeo