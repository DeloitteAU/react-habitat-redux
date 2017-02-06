/**
 * Copyright 2016-present, Deloitte Digital.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IContainer, IDomFactory }	from 'react-habitat';


export interface IReduxContainer extends IContainer {
	/**
	 * Register a new component in the container
	 * @param {string}      name        - The key that identifies this component
	 * @param {*}           comp        - The component class
	 */
	register: (name: string, comp: any) => void;

	/**
	 * Register multiple components in the container
	 * @param {object}      comps        - The components
	 */
	registerAll: (comps: {}) => void;

	/**
	 * Get a registered component for a key
	 * @param {string}      name        - The key name of the component that has been registered
	 */
	resolve: (name: string) => any;

	/**
	* The container's unique id
	*/
	id: () => string;

	/**
	 * The containers dom factory
	 */
	domFactory: () => IDomFactory;
}

export interface IReduxContainerConstructable{
	new (store: any): IReduxContainer;
}

declare module ReduxHabitat {
	export var Container: IReduxContainerConstructable;
}


export default ReduxHabitat;
