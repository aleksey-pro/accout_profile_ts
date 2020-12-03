import React, { Fragment, cloneElement } from "react";

type TabType = {
	children: React.ReactNode,
	label?: string,
	id: string,
	onChangeTab?: () => void,
}

const Tab: React.FC<TabType> = ({ children, onChangeTab }) => {
	return <Fragment>
		{[children].map((el, key) => {
				if (React.isValidElement(el)) {
					return cloneElement(el, { onChangeTab, key })
				}
			}	
		)}
	</Fragment>;
}

export default Tab;
