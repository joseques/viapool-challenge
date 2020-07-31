import { ValidationResult } from "./ValidationResult";

export default interface IDriver {
	name: string;
	age: number;
	phone: number;
	email: string;
	plate: string;
	model: string;
	year: number;

	validateData(driverData: IDriver): ValidationResult<IDriver>;
}