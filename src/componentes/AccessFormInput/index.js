import "./AccessFormInput.css"

const AccessFormInput = (props)=>{
	console.log(props.label)
	return(
		<div className="form-group">
			<label>{props.label}</label>
			<input placeholder={props.placeholder} type={props.type}/>
		</div>
	);
}
export default AccessFormInput





