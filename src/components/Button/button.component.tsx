import React from "react";
import {useHistory} from "react-router-dom";

/* Styling */
import "./button.styles.scss";

interface Props{
	children:string;
	navigateTo?:string;
}

const Button:React.FC<Props> =(props)=>{
	const history=useHistory();

	const {children,navigateTo}=props;

	return (
		<button className="btn" onClick={()=>history.push(navigateTo?navigateTo:"/")}>
			{children}
		</button>
	)
}

export default Button;