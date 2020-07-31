import IDriver from '../Model/IDriver';

export default interface IApi<T> {
	/**
	 * Inserts a new driver through a post to the remote API endpoint.
	 * @param driver The driver information implementing the IDriver interface
	 * @returns `Promise<T>` promise which resolves when the operation is finished.
	 * Must throw an error when the data validation fails.
	 */
	createNewDriver(driver: IDriver): Promise<T>;
}