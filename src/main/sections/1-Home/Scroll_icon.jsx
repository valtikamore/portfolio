import React from 'react';
import style from "./Scroll_icon.module.scss"
import classes from "../../../header/navigation/Nav.module.scss";
import {Link} from "react-scroll";

export const ScrollIcon = () =>  {
	return (
			<div className={style.scrollMouse}>
				<div className={style.scrollTo}>
					<Link activeClass={classes.active}
						  to="about"
						  spy={true}
						  smooth={true}
						  hashSpy={true}
						  offset={-90}
						  duration={1000}
						  isDynamic={true}
						  ignoreCancelEvents={false}
					> <div className={style.chevron}></div>
						<div className={style.chevron}></div>
						<div className={style.chevron}></div>
					</Link>

					<span className={style.spanText}>Scroll down</span>
				</div>
			</div>
	);
}