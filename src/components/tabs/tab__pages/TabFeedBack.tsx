import React, { FC, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import scss from "./TabPages.module.scss";
import { ArrowLeftIcon, ArrowRightIcon, StarFiveIcon } from "@/components/svgs";

import { FormattedMessage } from "react-intl";

interface SlidersProps {
	title: string;
	text: string;
	user: string;
	date: string;
}

const images: SlidersProps[] = [
	{
		title: "Marvelous!",
		text: "My dispatcher Mike is the best I've worked with in my 15 years of driving. He's proactive about checking in, anticipating my needs, and making sure I have all the information and support I require. Even when issues come up, he works with me to find solutions instead of just pointing fingers. I really feel like he has my back, and that makes a huge difference in my job satisfaction and performance!",
		user: "Elcho911",
		date: "14/10/2022"
	},
	{
		title: "Thank you ❤️",
		text: "My dispatcher provides great feedback and is open to hearing my input. They implement my suggestions when possible, which shows they value my experience and perspective. That mutual respect is key to our positive working relationship!",
		user: "Sher911",
		date: "30/04/2023"
	},
	{
		title: "I like it!",
		text: "The dispatchers at this company really understand what drivers go through on the road. They are patient, empathetic, and do their best to accommodate our needs and concerns. I feel like they have my back, which makes a big difference!",
		user: "Tima911",
		date: "19/06/2022"
	},
	{
		title: "The best!",
		text: "My dispatcher is always available 24/7 to help with any issues or emergencies. She communicates clearly and makes sure I have all the details I need to get the load delivered on time. It's a real partnership, not just a one-way relationship! 🙌🏻",
		user: "Elcho911",
		date: "14/10/2023"
	},
];

const TabFeedBack: FC = () => {
	const [currentSlide, setCurrentSlide] = useState<any>(0);
	const [loaded, setLoaded] = useState<any>(false);
	const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
			// ! slider
			loop: true,
			// mode: "free-snap",
			slides: {
				// origin: "center",
				perView: 1,
				spacing: 10
			},

			breakpoints: {
				"(min-width: 650px)": {
					slides: { perView: 2, spacing: 15 }
				},
				"(min-width: 1000px)": {
					slides: { origin: "center", perView: 3, spacing: 25 }
				}
			},

			// ! navigation + buttons
			initial: 0,
			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel);
			},
			created() {
				setLoaded(true);
			}
		},

		// ! auto play
		[
			(slider) => {
				let timeout: ReturnType<typeof setTimeout>;
				let mouseOver = false;

				function clearNextTimeout() {
					clearTimeout(timeout);
				}

				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 1500);
				}

				slider.on("created", () => {
					slider.container.addEventListener("mouseover", () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener("mouseout", () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on("dragStarted", clearNextTimeout);
				slider.on("animationEnded", nextTimeout);
				slider.on("updated", nextTimeout);
			}
		]
	);

	return (
		<>
			<div className={scss.FeedBack__container}>
				<div className={scss.title}>
					<FormattedMessage
						id="page.tabs.title.feedback"
						values={{ span: (chunks) => <span>{chunks}</span> }}
					/>
				</div>
				<div className={scss.navigation__wrapper}>
					<div ref={ref} className="keen-slider">
						{images.map((item, index) => (
							<div key={index + 1} className="keen-slider__slide">
								<div className={scss.card}>
									<div className={scss.icon}>
										<StarFiveIcon />
									</div>
									<h5 className={scss.card__title}>{item.title}</h5>
									<p className={scss.text}>{item.text}</p>
									<h5 className={scss.user__date}>
										{/*{item.user},*/}
										{item.date}
									</h5>
								</div>
							</div>
						))}
					</div>
				</div>

				{loaded && instanceRef.current && (
					<div className={scss.dots}>
						{/* ! arrow__left */}
						<div>
							{loaded && instanceRef.current && (
								<>
									<span
										className={`${scss.arrow} ${scss.arrow__left}`}
										onClick={(e: any) =>
											e.stopPropagation() || instanceRef.current?.prev()
										}
									>
										<ArrowLeftIcon />
									</span>
								</>
							)}
						</div>
						{/* ! dot */}
						{Array.from(
							{ length: instanceRef.current.track.details.slides.length },
							(_, idx) => (
								<button
									key={idx}
									onClick={() => {
										instanceRef.current?.moveToIdx(idx);
									}}
									className={
										currentSlide === idx
											? `${scss.dot} ${scss.active}`
											: `${scss.dot}`
									}
								></button>
							)
						)}
						{/* ! arrow__right */}
						<div>
							{loaded && instanceRef.current && (
								<>
									<span
										className={`${scss.arrow} ${scss.arrow__right}`}
										onClick={(e: any) =>
											e.stopPropagation() || instanceRef.current?.next()
										}
									>
										<ArrowRightIcon />
									</span>
								</>
							)}
						</div>
					</div>
				)}
			</div>
		</>
	);
};
export default TabFeedBack;
