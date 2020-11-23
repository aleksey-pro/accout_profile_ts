import React, { Fragment, cloneElement } from "react";

const Tab = ({ children, onChangeTab }) => {
	return <Fragment>
		{[children].map((el, key) => cloneElement(el, { onChangeTab, key }))}
	</Fragment>;
}

export default Tab;
