import React from 'react';
import './Register.css';
import DummyApi from '../Service/DummyApi';
import Driver from '../Model/Driver';
import { IRegisterState, IRegisterProps } from '../Model/RegisterState';


export default class Register extends React.Component<IRegisterProps, IRegisterState> {
	Api = new DummyApi(2500);
	constructor(props: IRegisterProps) {
		super(props);
		this.state = {
			requestInProgess: false,
			registeredSuccesful: false,
			formError: false,
			errorSelector: "",
			errorMessage: ""
		}
	}

	/**
	 * Handles the submit of the register form and creates a new driver based on the sent data
	 * @param thisInstance Current instance of the Class Object
	 * @param event Event passed by the handleSubmit event of the HTML form
	 */
	handleSubmit(thisInstance: Register, event: any){
		event.preventDefault();
		var {name, age, phone, mail, plate, model, year} = event.target;
		var newDriver = new Driver(name.value, age.value, phone.value, mail.value, plate.value, model.value, year.value);
		var driverValidationResult = newDriver.validateData();
		if(driverValidationResult.isValid){
			thisInstance.setState({requestInProgess: true});
			thisInstance.Api.createNewDriver(newDriver)
			.then((result)=> {
				if(result){
					thisInstance.setState({formError: false, requestInProgess: false, registeredSuccesful: true});
				}
			});
		} else {
			thisInstance.setState({formError:true, errorSelector: driverValidationResult.errorFieldSelector, errorMessage: driverValidationResult.errorMessage});
		}
	}

	render() {
		return (
			<div className="container">
				<form id="contact" method="post" onSubmit={(e)=>this.handleSubmit(this,e)}>
					<img src={require("../Img/logo.png")} className="logo" />
					<h4>¡Complete el formulario para ser parte de Viapool!</h4>
					<fieldset>
						<input placeholder="Nombre" type="text" name="name" required />
					</fieldset>
					<fieldset>
						<input placeholder="Edad" type="number" name="age" required />
					</fieldset>
					<fieldset>
						<input placeholder="Número de teléfono" name="phone" type="tel" required />
					</fieldset>
					<fieldset>
						<input placeholder="Correo electrónico" name="mail" type="email" className={this.state.errorSelector == "email" && this.state.formError ? "error" : ""} required />
						{this.state.errorSelector == "email" && this.state.formError ? <span className="errorMessage"> {this.state.errorMessage} </span> : ""}
					</fieldset>
					<fieldset>
						<input placeholder="Patente" type="text" name="plate" className={this.state.errorSelector == "plate" && this.state.formError ? "error" : ""} required />
						{this.state.errorSelector == "plate" && this.state.formError ? <span className="errorMessage"> {this.state.errorMessage} </span> : ""}
					</fieldset>
					<fieldset>
						<input placeholder="Modelo" type="text" name="model" required />
					</fieldset>
					<fieldset>
						<input placeholder="Año" type="number" name="year" required />
					</fieldset>
					<fieldset>
						{this.state.requestInProgess ? <div className="lds-hourglass"></div> : this.state.registeredSuccesful ? <button id="contact-submited"></button> : <button name="submit" type="submit" id="contact-submit">Registrarse</button> }
					</fieldset>
				</form>
			</div>
		);
	}
}