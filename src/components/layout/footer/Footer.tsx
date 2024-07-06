import React, { FC } from "react";
import scss from "./Footer.module.scss";
import { InstagramIcon, TelegramIcon, WhatAppIcon } from "@/components/svgs";
import SwitchLogo from "@/components/theme/SwitchLogo";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

import { IsOpenProps } from "@/components/layout/Layout";

interface FooterProps extends IsOpenProps {}

const Footer: FC<FooterProps> = (props) => {
	return (
		<div className={scss.footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.footer__top}>
						<div className={scss.block}>
							<Link
								className={scss.logo__link}
								href="/"
								onClick={() => {
									props.setIsOpen(false);
									props.setIsOpenDropdown(false);
									props.setIsOpenDropdownLanguage(false);
								}}
							>
								<div className={scss.bg}>
									<SwitchLogo className={scss.logoDevX} />
								</div>
							</Link>
							<p>
								<FormattedMessage id="page.footer.block_1.title" />
							</p>
						</div>
						<div className={scss.block}>
							<h6>
								<FormattedMessage id="page.footer.block_2.title" />
							</h6>
							<a className={scss.link__text} href="#">
								<FormattedMessage id="page.footer.block_2.text_1" />
							</a>
							<a className={scss.link__text} href="/carhauling">
								<FormattedMessage id="page.footer.block_2.text_2" />
							</a>
							<a className={scss.link__text} href="/amazon">
								<FormattedMessage id="page.footer.block_2.text_3" />
							</a>
							<a className={scss.link__text} href="/learning">
								<FormattedMessage id="page.footer.block_2.text_4" />
							</a>
						</div>
						<div className={scss.block}>
							<h6>
								<FormattedMessage id="page.footer.block_3.title" />
							</h6>
							<a className={scss.link__text} href="/performance">
								<FormattedMessage id="page.footer.block_3.text_1" />
							</a>
							<a className={scss.link__text} href="/faqs">
								<FormattedMessage id="page.footer.block_3.text_2" />
							</a>
						</div>
						<div className={scss.block}>
							<h6>
								<FormattedMessage id="page.footer.block_4.title" />
							</h6>
							{/*<a className={scss.link__text} href="#">*/}
							{/*	boss.armsport@gmail.com*/}
							{/*</a>*/}
							<a className={scss.link__text} href="tel:+998979239887">
							+998 97 923 98 87
							</a>
							<a className={scss.link__text} href="tel:+998979174215">
							+998 97 917 42 15
							</a>
						</div>
					</div>
					<hr />
					<div className={scss.footer__bottom}>
						<div className={scss.copyright}> ©2024 Keep Easy</div>
						<div className={scss.icons}>
							<a
								className={scss.link}
								href="https://www.instagram.com/keep_easylogistics/"
								target="_blank"
								aria-label="Link to Instagram profile"
							>
								<InstagramIcon />
							</a>
							<a
								className={scss.link}
								href="#"
								target="_blank"
								aria-label="Link to WhatApp profile"
							>
								<WhatAppIcon />
							</a>
							<a
								className={scss.link}
								href="https://t.me/komil_karaev"
								target="_blank"
								aria-label="Link to Telegram Call"
							>
								<TelegramIcon />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
