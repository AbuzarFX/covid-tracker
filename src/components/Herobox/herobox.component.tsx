import React from "react";

/* Styling */
import "./herobox.styles.scss";

/* Asset */
import maskMan from "../../asset/mask-man.svg";

/* Components */
import Button from "../Button/button.component";


interface Props{
}

const Herobox : React.FC<Props> =()=>{
	return (
	<header className="u-container herobox">
		<div className="herobox__image">
			<img src={maskMan} alt="Person wearing a mask"/>
		</div>
		<div className="herobox__content">
			<h1>
				 COVID Tracker
			<span>Get live statistics on corona cases from around the globe. 🌎 </span>
			</h1>
			<Button navigateTo="/tracker">Use Tracker</Button>
		</div>

	</header>
	)
}

export default Herobox;