import * as React from 'react';
import {
	Fragment, cloneElement, useState,
} from "react";

const Tabs = ({
	children, activeTab = 0,
})  => {
	const tabs = React.Children.toArray(children);
	const [state, setState] = useState({
		activeTab: tabs ? tabs[activeTab].props.id : [],
		visible: false,
	});
	const onChangeTab = (evt, id) => {
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
					{ state.activeTab === el.props.id
						&& <Fragment>
							{cloneElement(el, { onChangeTab })}
						</Fragment>
					}
				</div>
			))}
	</section>;
}

export default Tabs;

