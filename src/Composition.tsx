import { useVideoConfig, useCurrentFrame } from "remotion";

export const MyComposition = () => {
	const { fps, durationInFrames, width, height } = useVideoConfig();

	const frame = useCurrentFrame();
	const opacity = frame / durationInFrames;
	return (
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				fontSize: '7em',
				background: 'black',
				color: 'red',
				opacity,
			}}
		>
			Hello! 👋 I made a {width}x{height}px video that is {durationInFrames / fps} seconds long.
		</div>
	);
};
