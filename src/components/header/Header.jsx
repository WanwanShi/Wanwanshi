import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../personalInfo";

import { Fade } from "react-awesome-reveal";
const onMouseEnter = (event, color) => {
	const el = event.target;
	el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
	const el = event.target;
	el.style.backgroundColor = "transparent";
};

export default function Header(props) {
	const link = settings.isSplash ? "/splash" : "home";
	const theme = props.theme;
	return (
		<Fade direction="down" duration={1000} triggerOnce="true">
			<div>
				<header className="header">
					<NavLink to={link} tag={Link} className="logo">
						<span style={{ color: theme.text }}> &lt;</span>
						<span className="logo-name" style={{ color: theme.text }}>
							{greeting.logo_name}
						</span>
						<span style={{ color: theme.text }}>/&gt;</span>
					</NavLink>
					<input className="menu-btn" type="checkbox" id="menu-btn" />
					<label className="menu-icon" htmlFor="menu-btn">
						<span className="navicon"></span>
					</label>
					<ul className="menu" style={{ backgroundColor: theme.body }}>
						<li>
							<NavLink
								to="/home"
								tag={Link}
								activestyle={{ fontWeight: "bold" }}
								style={{ color: theme.text }}
								onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
								onMouseOut={(event) => onMouseOut(event)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/education"
								tag={Link}
								activestyle={{ fontWeight: "bold" }}
								style={{ color: theme.text }}
								onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
								onMouseOut={(event) => onMouseOut(event)}
							>
								Education
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/experience"
								tag={Link}
								activestyle={{ fontWeight: "bold" }}
								style={{ color: theme.text }}
								onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
								onMouseOut={(event) => onMouseOut(event)}
							>
								Experience
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/projects"
								tag={Link}
								activestyle={{ fontWeight: "bold" }}
								style={{ color: theme.text }}
								onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
								onMouseOut={(event) => onMouseOut(event)}
							>
								Projects
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/contact"
								tag={Link}
								activestyle={{ fontWeight: "bold" }}
								style={{ color: theme.text }}
								onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
								onMouseOut={(event) => onMouseOut(event)}
							>
								Contact Me
							</NavLink>
						</li>
					</ul>
				</header>
			</div>
		</Fade>
	);
}
