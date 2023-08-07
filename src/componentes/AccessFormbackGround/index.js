import "./AccessFormbackGround.css"
import AccessFormInput from '../AccessFormInput';

const AccessFormbackGround = (props)=>{
	return(
		<section className="form-bachGround">
            <form>
                <h4 class="form-title"><b>{props.title}</b></h4>
                <AccessFormInput label = "E-mail" placeholder = "me@examplemailprovider.com" type = "e-mail"/>
                <AccessFormInput label = "Password" placeholder = "*********" type = "password"/>
            </form>
        </section>
	);
}
export default AccessFormbackGround