import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../../utils/useMousePosition';

export default function Role({ forwardedRef }: any) {
	const [isHovered, setIsHovered] = useState(false);

	const { x, y } = useMousePosition();

	const size = isHovered ? 330 : 30;
	return (
		<section
			ref={forwardedRef}
			id='about'
			className='select-none flex md:my-[20%] flex-col items-center justify-center overflow-hidden nav-change relative '
			aria-label=''
		>
			<motion.div
				className='absolute bg-red-600 text-black flex w-full items-center '
				style={{
					WebkitMaskImage: `url('icons/mask.svg')`,
					WebkitMaskRepeat: `no-repeat`,
				}}
				animate={{
					WebkitMaskPosition: `${
						x !== null && y !== null ? x - size / 1.4 : 0
					}px ${y !== null ? y - size : 0}px`,
					WebkitMaskSize: `${size}px`,
				}}
				transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
				onMouseEnter={() => {
					setIsHovered(true);
				}}
				onMouseLeave={() => {
					setIsHovered(false);
				}}
			>
				<h1 className='text-heading-1 font-medium text-black leading-[1.25em] md:leading-[1.08em]'>
					A web developer who navigates the front end and dabbles in backend
					with Google as the trusty sidekick!
				</h1>
			</motion.div>
			<div className='flex w-full items-center space-x-20  h-full'>
				<h1 className='text-heading-1 font-medium text-secondary-400 leading-[1.25em] md:leading-[1.08em]'>
					I am a
					<span className='text-heading-1 font-medium text-red-600 leading-[1.25em] md:leading-[1.08em] font-general tracking-headings'>
						{' '}
						software engineer{' '}
					</span>
					with a strong commitment to delivering high-quality and impactful
					digital solutions.
				</h1>
			</div>
		</section>
	);
}
