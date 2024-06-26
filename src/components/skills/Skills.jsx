import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-awesome-reveal";

export default function Skills(props) {
	const theme = props.theme;
	return (
		<div className="main" id="skills">
			<div className="skills-header-div">
				<Fade direction="up" duration={2000} triggerOnce="true">
					<h1 className="skills-header" style={{ color: theme.text }}>
						What I Do?
					</h1>
				</Fade>
			</div>
			<SkillSection theme={theme} />
		</div>
	);
}
