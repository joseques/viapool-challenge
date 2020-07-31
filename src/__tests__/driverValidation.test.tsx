import Driver from '../Model/Driver';

const newValidDriver = new Driver("Juan", 35, 11556677, "juan@email.com", "ABC123", "Chevrolet Corsa", 2010);
const invalidEmailDriver = new Driver("Juan", 35, 11556677, "not an email", "ABC123", "Chevrolet Corsa", 2010);
const invalidPlateDriver = new Driver("Juan", 35, 11556677, "juan@email.com", "ABC-123", "Chevrolet Corsa", 2010);
test('Conductor valido', () => {
	expect(newValidDriver.validateData()).toStrictEqual({ isValid: true, result: newValidDriver });
});
test('Conductor email invalido', () => {
	expect(invalidEmailDriver.validateData()).toStrictEqual({
		isValid: false,
		errorMessage: 'Ingrese un email válido (Formato "ejemplo@ejemplo.com")',
		errorFieldSelector: 'email'
	});
});
test('Conductor patente invalida', () => {
	expect(invalidPlateDriver.validateData()).toStrictEqual({
		isValid: false,
		errorMessage: 'La patente solo puede contener numeros, letras y espacios (Ejemplo "ABC 123 CD", "ABC123")',
		errorFieldSelector: 'plate'
	});
});