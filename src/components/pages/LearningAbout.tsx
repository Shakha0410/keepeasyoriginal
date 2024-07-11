import React, { FC } from "react";
import scss from "./Style.module.scss";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import TeethIcon from "../../assets/img/MX_Logistics_0448.jpg";
import MedPlus from "@/assets/icons/graduated.png";
import CheckMark from "@/assets/icons/book.png";
import BxChild from "../../assets/icons/clock.png";
import ReactYoutube from "@/components/react-youtube/ReactYoutube";
import Learningvideo from "../react-youtube/Learningvideo";

const LearningAbout: FC = () => {
	return (
		<>
			<div id="about" className={scss.about__page}>
				<div className={scss.block__1}>
					<div className="container">
						<div className={scss.about__us}>
							<Image
								priority={true}
								quality={1}
								loading="eager"
								className={scss.balance__for__mobile}
								src={TeethIcon}
								alt={"teeth"}
							/>
							<div className={scss.icon__first}>
								<Image
									priority={true}
									quality={25}
									loading="eager"
									src={TeethIcon}
									alt={"teeth"}
								/>
							</div>
							<div className={scss.icon__second}>
								<Image
									priority={true}
									quality={25}
									loading="eager"
									src={TeethIcon}
									alt={"teeth"}
								/>
							</div>
							<h1 className={scss.title}>
								<FormattedMessage id="page.about.learningtitle" />
							</h1>
							<div className={scss.video__text}>
								<Learningvideo className={scss.youtube} />
								<p className={scss.text}>
									<FormattedMessage id="page.about.about.me" />
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className={scss.block__2}>
					<div className="container">
						<div className={scss.about__ticket}>
							<div className={scss.card}>
								<Image
									priority={true}
									quality={25}
									loading="eager"
									className={scss.icon}
									src={MedPlus}
									alt="MedPlus"
								/>
								<p className={scss.text}>
									<FormattedMessage id="page.about.ticket.first" />
								</p>
							</div>
							<div className={scss.card}>
								<Image
									priority={true}
									quality={25}
									loading="eager"
									className={scss.icon}
									src={CheckMark}
									alt="CheckMark"
								/>
								<p className={scss.text}>
									<FormattedMessage id="page.about.ticket.second.two" />
								</p>
							</div>
							<div className={scss.card}>
								<Image
									priority={true}
									quality={25}
									loading="eager"
									className={scss.icon}
									src={BxChild}
									alt="BxChild"
								/>
								<p className={scss.text}>
									<FormattedMessage id="page.about.ticket.third" />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default LearningAbout;
