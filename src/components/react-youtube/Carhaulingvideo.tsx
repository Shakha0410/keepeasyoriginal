import React, { FC } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface YoutubeProps {
	className: string;
}

const Carhaulingvideo: FC<YoutubeProps> = ({ className }) => {
	const onPlayerReady: YouTubeProps["onReady"] = (event) => {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	};

	const opts: YouTubeProps["opts"] = {
		playerVars: {
			autoplay: 0
		}
	};

	return (
		<>
			<YouTube
				iframeClassName={className}
				videoId="iAqN7MJ4Reo"
				opts={opts}
				onReady={onPlayerReady}
			/>
		</>
	);
};
export default Carhaulingvideo;
