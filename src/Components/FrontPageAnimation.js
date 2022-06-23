import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const FrontPageAnimation = () => {
	let FrontAnim = useRef(null)
	useEffect(() => {
		gsap.to(FrontAnim, { duration: 2.5,ease: "power1.out", y: -1000, delay:1});
	},[])
	return (
		<>
		<div ref={el => FrontAnim = el} className="AnimationConatiner">
				<h1 style={{color:'black'}}>Welcome  To Creative Mind</h1>
		</div>
		</>
	)
}

export default FrontPageAnimation