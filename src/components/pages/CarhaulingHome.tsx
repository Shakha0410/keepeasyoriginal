import React, { FC } from "react";
import scss from "./Style.module.scss";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import AnimatedNumbers from "@/components/framer-motion/AnimatedNumbers";
import { Typewriter } from "react-simple-typewriter";
import { InstagramIcon, TelegramIcon, WhatAppIcon } from "@/components/svgs";

const CarhaulingHome: FC = () => {
	const intl: any = useIntl();

	const title: any = intl.formatMessage({ id: "page.head.home.title" });

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div id="/" className={scss.carhome__page}>
				<div className="container">
					<div className={scss.content}>
						{/* ! left */}
						<div className={scss.left}>
							<div className={scss.sub__title}>
								<h1 className={scss.title}>
									<Typewriter
										words={[intl.formatMessage({ id: "page.home.carhauling.title" })]}
										loop={true}
										cursor
										cursorStyle="|"
										typeSpeed={50}
										deleteSpeed={10}
										delaySpeed={1500}
									/>
								</h1>
								
							</div>
						</div>

						
					</div>
				</div>
			</div>
		</>
	);
};
export default CarhaulingHome;
