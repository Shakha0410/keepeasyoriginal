import React, { FC } from "react";
import scss from "./Style.module.scss";
import Tabs from "@/components/tabs/Tabs";

const AmazonBasic: FC = () => {
	return (
		<>
			<div id="feedback" className={scss.feed__back}>
				<Tabs />
			</div>
		</>
	);
};
export default AmazonBasic;