import { ValidationResult } from "./ValidationResult";
import IDriver from "./IDriver";

export default class Driver implements IDriver {
	name: string;
	age: number;
	phone: number;
	email: string;
	plate: string;
	model: string;
	year: number;

	constructor(Name: string, Age: number, Phone: number, Email: string, Plate: string, Model: string, Year: number) {
		this.name = Name;
		this.age = Age;
		this.phone = Phone;
		this.email = Email;
		this.plate = Plate;
		this.model = Model;
		this.year = Year;
	}

	public validateData(): ValidationResult<Driver> {
		const emailRegex: RegExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
		const plateRegex: RegExp = new RegExp(/[^0-9a-zA-Z\s]/);
		if(!emailRegex.test(this.email)){
			return {
				isValid: false,
				errorMessage: 'Ingrese un email válido (Formato "ejemplo@ejemplo.com")',
				errorFieldSelector: 'email'
			}
		}
		if(plateRegex.test(this.plate)){
			return {
				isValid: false,
				errorMessage: 'La patente solo puede contener numeros, letras y espacios (Ejemplo "ABC 123 CD", "ABC123")',
				errorFieldSelector: 'plate'
			}
		}
		return {
			isValid: true,
			result: this
		}
	};
}