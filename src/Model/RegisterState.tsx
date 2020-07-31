export interface IRegisterProps {
	//code related to your props goes here
 }
 
export interface IRegisterState {
	requestInProgess: boolean,
	formError: boolean,
	errorSelector: string,
	registeredSuccesful: boolean,
	errorMessage: string
 }