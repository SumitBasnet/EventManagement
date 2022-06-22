import React from 'react'
import coverVid from '../Assets/eventvid.mp4'

const CoverVdeo = () => {
	return (
		<div className="vid">
		<video src={coverVid} type="video/mp4" autoPlay muted loop> </video>
		</div>
	)
}

export default CoverVdeo