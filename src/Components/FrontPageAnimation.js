import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const FrontPageAnimation = () => {
	let FrontAnim = useRef(null)
	useEffect(() => {
		
		gsap.to(FrontAnim, { duration: 2.5, ease: "bounce.out", y: -800,setTimeout:10000 });
	},[])
	return (
		<>
		<div ref={el => FrontAnim = el} className="AnimationConatiner">
				<h1 style={{color:'black'}}>hello</h1>
		</div>
		</>
	)
}

export default FrontPageAnimation