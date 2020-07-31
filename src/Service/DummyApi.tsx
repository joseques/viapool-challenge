import IDriver from '../Model/IDriver';
import IApi from './IApi';

export default class DummyApi implements IApi<boolean> {
	private responseDelayTime: number;

	/**
	 * @param ResponseDelayTime Delay response time for the 'requests' in milliseconds. (Default 2500 ms)
	 */
	constructor(ResponseDelayTime: number = 2500) {
		this.responseDelayTime = ResponseDelayTime;
	}

	/**
	 * Inserts a new driver through a post to the remote API endpoint.
	 * @param driver The driver information implementing the IDriver interface
	 * @returns `Promise<boolean>` a dummy promise timed to resolve using the `responseDelayTime` variable.
	 */
	public createNewDriver(driver: IDriver): Promise<boolean> {
		return new Promise((resolve, reject)=> {
			setTimeout(() => resolve(true), this.responseDelayTime);
		});
	};
}