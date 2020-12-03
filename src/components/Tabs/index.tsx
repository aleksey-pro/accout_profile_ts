import * as React from 'react';
import {
	Fragment, cloneElement, useState,
} from "react";

type TabsType = {
	children: React.ReactNode,
	activeTab: number
}

const Tabs: React.FC<TabsType> = ({
	children, activeTab = 0,
})  => {
	const tabs = React.Children.toArray(children);
    // console.log("🚀 ~ file: index.tsx ~ line 15 ~ tabs", tabs)
	const [state, setState] = useState({
		activeTab: tabs ? tabs[activeTab].props.id : [],
		visible: false,
	});
	const onChangeTab = (evt: React.MouseEvent<HTMLAnchorElement>, id) => {
		evt.preventDefault();
		setState({
			...state,
			activeTab: id,
		});
	};

	return <section className="tabs-box">
			<div className="tab-box">
				<ul className="tabs container">
					{tabs.map((el, i) => (
						<li
							className={`item ${state.activeTab === el.props.id && "active"}`}
							key={i}>
							<a href="/" 
							onClick={(e) => onChangeTab(e, el.props.id)} 
						>{el.props.label}</a>
						</li>
					))}
				</ul>
			</div>
			{tabs.map((el, i) => (
				<div className="tab_container container" key={i}>
					{ state.activeTab === el.props.id && React.isValidElement(el)
						&& <Fragment>
							{cloneElement(el, { onChangeTab })}
						</Fragment>
					}
				</div>
			))}
	</section>;
}

export default Tabs;

