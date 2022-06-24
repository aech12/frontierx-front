import React, { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

const set1 = {
	highlightColor: 0xb3ff,
	midtoneColor: 0x9347be,
	lowlightColor: 0x6434aa,
	baseColor: 0x51009d,
	blurFactor: 0.3,
	speed: 0.5,
	zoom: 1.7,
};
const set2 = {
	highlightColor: 0xd20611,
	midtoneColor: 0x4152cf,
	lowlightColor: 0xe8a3f7,
	baseColor: 0xd16b6,
	blurFactor: 0.33,
	speed: 0.5,
	zoom: 1.7,
};
const set3 = {
	highlightColor: 0x7800ff,
	baseColor: 0x8011b,
	blurFactor: 0.31,
	speed: 0.3,
	zoom: 1.6,
};

function AnimatedBg({ children }: { children: ReactNode }) {
	const [vantaEffect, setVantaEffect] = useState<any>(0);
	const vantaRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				FOG({
					el: vantaRef.current,
					mouseControls: false,
					touchControls: false,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					...set3, // SET BG
					THREE,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<div ref={vantaRef} className="h-full w-full bg-indigo-900">
			{children}
		</div>
	);
}

export default AnimatedBg;


// // testing Lighthouse pageload without using vanta.js
// import React, { useState, useEffect, useRef } from "react";
// import type { ReactNode } from "react";


// function AnimatedBg({ children }: { children: ReactNode }) {

// 	return (
// 		<div className="h-full w-full bg-indigo-900">
// 			{children}
// 		</div>
// 	);
// }

// export default AnimatedBg;
