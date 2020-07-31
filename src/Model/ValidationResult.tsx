export type ValidationResult<T> =
	| { isValid: true, result: T }
	| { isValid: false, errorMessage: string, errorFieldSelector: string }