import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, Variants } from 'framer-motion';

export default function Cursor() {
	const [cursor, setCursor] = useState({ x: 0, y: 0 });
	const curs = useRef(null);

	const cursorSize = 15;
	const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const smoothMouse = {
		x: useSpring(mouse.x, smoothOptions),

		y: useSpring(mouse.y, smoothOptions),
	};

	const manageMouseMove = (e: MouseEvent) => {
		const { clientX, clientY } = e;
		// console.log(e);
		// mouse.x.set(clientX);
		// mouse.y.set(clientY);

		mouse.x.set(clientX - cursorSize / 2);
		mouse.y.set(clientY - cursorSize / 2);
	};

	console.log(mouse);
	useEffect(() => {
		document.addEventListener('mousemove', manageMouseMove);
		return () => {
			document.removeEventListener('mousemove', manageMouseMove);
		};
	}, []);

	return (
		<motion.div
			ref={curs}
			className='cursor pointer-events-none fixed left-1/2 top-1/2 z-[999] hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary-600 sm:flex'
			// style={{ left: `${mouse.x}px`, top: `${mouse.y}px` }}
			style={{
				left: smoothMouse.x,

				top: smoothMouse.y,
			}}
		>
			<svg
				width='100'
				height='100'
				viewBox='0 0 100 100'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle cx='50' cy='50' r='50' fill='black' />
			</svg>
		</motion.div>
	);
}
