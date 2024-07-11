import React, { FC, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import scss from "./TabPages.module.scss";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/svgs";

import { FormattedMessage } from "react-intl";
import Image from "next/image";
import pic1 from "../../../assets/komil.jpg";
import pic2 from "../../../assets/zafar.jpg";
import pic3 from "../../../assets/ulugbek.jpg";
import pic4 from "../../../assets/shakhzod.jpg";
import pic5 from "../../../assets/alisher.jpg";

interface SlidersProps {
	img: any;
	text: string;
}

const images: SlidersProps[] = [
	{
		img: pic1,
		text: "Ulugbek"
	},
	{
		img: pic2,
		text: "Zafar"
	},
	{
		img: pic3,
		text: "Shaxzod"
	},
	{
		img: pic4,
		text: "Shavkat"
	},
	{
		img: pic5,
		text: "Muhammad"
	}
];

const TabStaff: FC = () => {
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
						4;
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
			<div className={scss.certificate__container}>
				<div className={scss.title}>
					<FormattedMessage
						id="page.tabs.title.staff"
						values={{ span: (chunks) => <span>{chunks}</span> }}
					/>
				</div>
				<div className={scss.navigation__wrapper}>
					<div ref={ref} className="keen-slider">
						{images.map((item, index) => (
							<div key={index + 1} className="keen-slider__slide">
								<div className={scss.card}>
									<span className={scss.stafftext}>{item.text}</span>
									<Image className={scss.img} quality={50} loading="eager" src={item.img} alt={"staff"} />
									
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
export default TabStaff;


